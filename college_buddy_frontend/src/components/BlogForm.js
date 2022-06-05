import React from 'react'
import '../App.css';
function BlogForm() {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="well well-sm">
                            <form class="" method="post" action="http://localhost:3000/api/blog">
                                <fieldset>
                                    <legend class="text-xs-center header">Contact us</legend>

                                    <div class="form-group">
                                        <span class="col-md-1 offset-md-2 text-xs-center"><i class="fa fa-user bigicon"></i></span>
                                        <div class="col-md-8">
                                            <input id="fname" name="title" type="text" placeholder="Title" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <span class="col-md-1 offset-md-2 text-xs-center"><i class="fa fa-user bigicon"></i></span>
                                        <div class="col-md-8">
                                            <input id="lname" name="create_date" type="date" placeholder="Date" class="form-control" />
                                        </div>
                                    </div>
                                    {/* <div class="form-group">
                                        <span class="col-md-1 offset-md-2 text-xs-center"><i class="fa fa-user bigicon"></i></span>
                                        <div class="col-md-8">
                                            <input id="lname" name="name" type="text" placeholder="Last Name" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <span class="col-md-1 offset-md-2 text-xs-center"><i class="fa fa-envelope-o bigicon"></i></span>
                                        <div class="col-md-8">
                                            <input id="email" name="email" type="text" placeholder="Email Address" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <span class="col-md-1 offset-md-2 text-xs-center"><i class="fa fa-phone-square bigicon"></i></span>
                                        <div class="col-md-8">
                                            <input id="phone" name="phone" type="text" placeholder="Phone" class="form-control" />
                                        </div>
                                    </div> */}

                                    <div class="form-group">
                                        <span class="col-md-1 offset-md-2 text-xs-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                                        <div class="col-md-8">
                                            <textarea class="form-control" id="message" name="blog_data" placeholder="Tell us about your amazing trips and adventures or about anything which can help others in any way" rows="7"></textarea>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="col-md-12 text-xs-center">
                                            <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogForm