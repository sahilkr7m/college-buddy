import React from 'react'

function Contribution() {
    return (
       

        <div>
             <form method="post" action="http://localhost:3000/api/contribute">
                <div class="mb-3">
                    <label for="exampleInputEmail1" name="name">name</label>
                    <input type="text" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" name="address">address</label>
                    <input type="text" name="address" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" name="gmaplink">link</label>
                    <input type="text" name="gmaplink" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Contribution