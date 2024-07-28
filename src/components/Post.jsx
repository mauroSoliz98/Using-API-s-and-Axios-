import { Button, Card } from "./ui"

function Post(props) {
  return (
    <Card>
       <h1 className="mt-2 text-lg font-semibold text-gray-800">{props.title}</h1>
        <p className="mt-2 text-sm text-gray-600">{props.body}</p>
        <Button onClick={()=>props.deletePost(props.id)}>
            Delete
        </Button>
    </Card>
  )
}

export default Post