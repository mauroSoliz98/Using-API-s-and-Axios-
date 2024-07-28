import { useState } from "react"
import { Button, Input, Label, Section, TextArea } from "./ui";

function AddPost(props) {
    const [title, setTitle] = useState([]);
    const [body, setBody] = useState([]);

    //handle Submit
    const haddleSubmit = (event) => {
        event.preventDefault();
        props.addPosts(title, body)
        setTitle('');
        setBody('');
    }
  return (
    <Section title={'Add new post'}>
        <form onSubmit={haddleSubmit}>
            <div className="grid grid-cols-1 gap-2 mt-2 sm:grid-cols-2">
                <div>
                    <Label htmlFor="title">Title</Label>
                    <Input 
                        name="title" 
                        type="text"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)} 
                    />
                </div>
                <div>
                    <Label htmlFor="body">Body</Label>
                    <TextArea
                        name="body"
                        rows={4}
                        cols={30}
                        value={body}
                        onChange={(e)=>setBody(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex justify-end mt-6">
                <Button>Add Post</Button>
            </div>
        </form>
    </Section>
      )
}

export default AddPost