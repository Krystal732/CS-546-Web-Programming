//You will code the route in this file
//Lecture Code Refernece -> https://github.com/stevens-cs546-cs554/CS-546/tree/master/lecture_05/routes

//You can import your getBooks() function in the /data/data.js file that you used for lab 3 to return the list of books.  You can also import your getBookById(id) function and call it in the :/id route.
import {Router} from 'express';
import {getBooks, getBookById} from '../data/data.js';
const router = Router();

router.route('/')
// Implement GET Request Method and send a JSON response  See lecture code!
.get(async (req, res) => {
    try {
      const books = await getBooks();
      return res.json(books);
    } catch (e) {
      return res.status(500).send(e);
    }
  });
router.route('/:id')
.get(async (req, res) => {
    // try {
    //   req.params.id = checkId(req.params.id);
    // } catch (e) {
    //   return res.status(400).json({error: e});
    // }
    try {
      const book = await getBookById(req.params.id);
      return res.json(book);
    } catch (e) {
      return res.status(404).json(e);
    }
  })
// Implement GET Request Method and send a JSON response See lecture code!

export default router;
