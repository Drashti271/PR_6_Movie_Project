import Movie from "../../models/movie.model.js";
export const homePage = (req,res)=>{
    return res.render('./client/index.ejs');
}

export const about = (req,res) => {
    res.render('./client/pages/about.ejs');
}

export const review = async (req, res) => {
  try {
    const movies = await Movie.find(); 
    res.render('./client/pages/review.ejs', { data: movies });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
};


export const joinus = (req,res) => {
    res.render('./client/pages/joinus.ejs');
}

export const contact = (req,res) => {
    res.render('./client/pages/contact.ejs');
}

export const singlePage = async(req,res) => {
    try {
        let {id}=req.params;
        let data=await Movie.findById(id);
        return res.render('./client/pages/single.ejs',{
            data
        });
    } catch (error) {
        console.log(error.message);
    }
}
