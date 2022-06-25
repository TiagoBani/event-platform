import { gql, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video'

const GET_LESSON_FIRST_BY_CREATED_AT = gql`
	query GetLessonFirstByCreatedAt {
		lessons(orderBy: createdAt_ASC, first: 1) {
			slug
		}
	}
`

type GetLessonFirstByCreatedAtResponse = {
	lessons: {
		slug: string
	}[]
}

type EventParams = {
	slug: string
}

export function Event() {
	const { slug } = useParams<EventParams>()

	function handleVideo(slug?: string) {
		if (slug) return <Video lessonSlug={slug} />

		const { data } = useQuery<GetLessonFirstByCreatedAtResponse>(
			GET_LESSON_FIRST_BY_CREATED_AT
		)

		return data?.lessons?.[0].slug ? (
			<Video lessonSlug={data.lessons[0].slug} />
		) : (
			<div className='flex-1'></div>
		)
	}

	return (
		<div className='flex flex-col min-h-screen'>
			<Header />
			<main className='flex flex-1'>
				{handleVideo(slug)}
				<Sidebar />
			</main>
		</div>
	)
}
