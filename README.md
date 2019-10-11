# Udemy:  Accelerated ES6 JavaScript Training

#### Completed Oct. 11, 2019

The course gives instruction for running the practice code in plunker, but I wanted to run it locally so that I could save my work.  Originally I created a Vue project for this, since Vue compiles ES6 easily.  But it was really overkill for these exercises, so then I used [this article](https://www.freecodecamp.org/news/how-to-enable-es6-and-beyond-syntax-with-node-and-express-68d3e11fe1ab/) to set up an Express server with Babel.

That worked very well; though Node did seem to behave slightly differently than the plunker examples, it did not have any effect on the outcome until the more advanced sections (Reflect and Proxy APIs).  And that could easily have been user error by then.

A lot of this was a review for me, but I enjoyed those modules as well.  A back-to-basics refresher helped to solidify concepts I only had a surface understanding of.  

Topics that were entirely new for me included: 
1. Symbols
2. Some aspects of Iterators and Generators
3. Maps and Sets
4. Reflect API
5. Proxy API

This was a good introduction but I won't claim to understand the new material fully.  Reflect and Proxy were particularly challenging, though mostly what I struggled to understand with all of these was how to apply them to a real problem.  I am glad to have worked through these exercises to see them in action, at least I hope to be able to recognize an opportunity to apply these in the real world.

The Express decision did fall through a bit when I got to the project at the end, it works as expected but all the code is in one file instead of in modules.  And I did not use a .env file, I just removed my API key before committing.