import { useState } from "react";

function Form() {

    function handleSubmit(e){
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);


        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson); 

    }

    return (
      <>
        <form method="post" onSubmit={handleSubmit}>
          <label>
            TEST INPUT <input name="postTitle" />
          </label>
          <label>
            TEST TEXTAREA
            <textarea
              name="postContent"
              rows={4}
              cols={40}
            />
          </label>
          <hr />
          <button type="reset">RESET</button>
          <button type="submit">SAVE</button>
        </form>
      </>
    );
}

export function sium(){
    
}

export default Form;
