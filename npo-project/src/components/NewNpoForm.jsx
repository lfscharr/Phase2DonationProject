import React, {useState} from "react";

function NewNpoForm({handleAddNpo}) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [type, setType] = useState("")
    const [website, setWebsite] = useState("")
    const [description, setDescription] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState("");

    function handleSubmit(e){
        e.preventDefault()
        let obj = {
            name: name,
            image: image,
            type: type,
            website: website,
            description: description
        }

        fetch("http://localhost:3000/npos", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                name: name,
                image: image,
                type: type,
                website: website,
                description: description
            })
        })
        .then(res => res.json())
        .then((newNpo)=> {
            handleAddNpo(newNpo)
            setName("")
            setImage("")
            setType("")
            setWebsite("")
            setDescription("")
            setIsSubmitted(true);
            setConfirmationMessage("╱╲❀╱╲Organization added successfully!╱╲╱╲❀╱╲");
        })
    }
    return (
    <div className="new-npo-form">
      <h2 class="text-center">New Organization Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e)=> setImage(e.target.value)}/>
        <input type="text" name="type" step="0.01" placeholder="type" value={type} onChange={(e)=> setType(e.target.value)} />
        <input type="text" name="website" placeholder="Website" value={website} onChange={(e)=> setWebsite(e.target.value)} />
        <input type="text" name="description" placeholder="Description" value={description} onChange={(e)=> setDescription(e.target.value)} />
        <button type="submit">Add Organization!</button>
      </form>
        {isSubmitted && <p class="font-extrabold text-red-600">{confirmationMessage}</p>}
    </div>
    );
}

export default NewNpoForm;