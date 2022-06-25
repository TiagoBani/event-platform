import { gql, useQuery } from '@apollo/client'

const GET_LESSONS_QUERY = gql`
	query {
		lessons {
			id
			tittle
		}
	}
`

type Lesson = {
	id: string
	tittle: string
}

function App() {
	const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)
	return (
		<ul>
			{data?.lessons.map((lesson) => (
				<li key={lesson.id}>{lesson.tittle}</li>
			))}
		</ul>
	)
}

export default App
