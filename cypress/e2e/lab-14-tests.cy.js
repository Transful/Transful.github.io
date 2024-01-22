/// <reference types = "cypress"/>  


//shared with students 
//Test 1 - test the "add post" form

it('Testing the "add Post" form', () => {
    cy.visit('http://localhost:8080/api/addpost')
    cy.contains('Add Post')
    cy.get('input').length > 2
    cy.get('button').should('exist')
    cy.get('button').should('be.visible').and('be.enabled')
})




//Test 2  - Test the "Sign up" form when password is not valid
/* 
it('Testing the sign up form when password is not valid', () => {
    cy.visit('http://localhost:8080/api/signup')
    cy.get('label').length > 2
    cy.get('input').length > 2
    cy.get('button').should('exist')
    cy.get('button').should('have.css', 'display')
    cy.get('h3').should('contain', 'SignUp')
    // ----- Your code goes here
    
    // -----
    cy.contains('Password must be at least 8 characters and less than 16 characters, it must include a capital letter and at least one number')
}) 
*/


//Test 3 - Testing the "Add post" page 
/* 
it('Testing the "Add post" page', () => {
    cy.visit('http://localhost:8080/api/addpost')
    cy.wait(2000)
    cy.get('#title').type('new post')
    cy.wait(2000)
    cy.get('#body').type('new post')
    cy.wait(2000)
    // ----- Your code goes here
    
    // -----
}) 
*/



//Test 4 - Testing the "all posts page and the link to the "a post" page" 
/* 
it('all posts page/link to a Post page', () => {
    cy.visit('http://localhost:8080/api/allposts')
    cy.wait(2000)
    // ----- Your code goes here
    
    // -----
}) 
*/



//Test 5 - Test modifying a post in the "a post" page" 
/* 
it('modifying a post', () => {
    cy.visit('http://localhost:8080/api/apost/1') // :id = 1 assuming that you have a post with such id
    cy.wait(2000)
    cy.get('#title').clear().type('next post title')
        // clear() will clear the text before writing  an input
    cy.wait(2000)
// ----- Your code goes here
    
// -----
}) 
*/



//Test 6 - Deleting a post in the "a post" page
/* 
it('deleting a post', () => {
    // ----- Your code goes here
    
    // -----
    }) 
*/



//========================== Basic API requests =========================

//Test 7 - testing  Get all request  from  an API for and check the returned ID
/* 
it("Get all posts", function() {
    cy.request("GET", "http://localhost:3000/api/posts", {}).then((res) => {
        cy.log(res.body)
        expect(res.body['0']).have.property('id')
        //expect(res.body['0'].id).to.equal(232) 
        let post = res.body
        assert.isArray(post, 'value is array')
    });
}) 
*/



//Test 8 - testing  Get request  from  an API for a post based on its ID, and check the returned ID
/* 
it("Get a post based on its id", function() {
    let postId = 1 //Change the value to an id of a post in your database
    cy.request("GET", `http://localhost:3000/api/posts/${postId}`, {}).then((res) => {
        cy.log(res.body.id)
        expect(res.body.id).to.equal(postId)
            // expect(res.body.title).to.equal('Post 1') //post title in my database
    });
}) 
*/

//Test 9 - testing  Post request  to an API
/* 
it("Add post request", function() {
    cy.request('POST', 'http://localhost:3000/api/posts', {
            "title": "Post 4",
            "body": "Post body 4",
            "urllink": "Post 4 urllink"
        })
        .then((res) => {
            cy.log(res.body)
            let post = res.body.rows['0'].id
            expect(post).to.not.be.null; // to guarantee  that the post has been added
            cy.log('post is added')
        });
}) 
*/



//Test 10 - testing  Update request  to an API
/* 
it("Update a post request", function() {
    // ----- Your code goes here
    
    // -----
}) 
*/


//Test 11 - testing  Delete request  to an API
/* 
it("Delete a post request", function() {
    // ----- Your code goes here
    
    // -----
}) 
*/