const ProgContest = require("../models/ProgContest.models");
const getPC = (req, res) => {
  res.render("prog-contest/registerTeam.ejs", { error: req.flash("error") });
};

const postPC = (req, res) => {
  const {teamName,institute,coachName,coachContact,coachEmail,coachTshirt,TLName,TLContact,TLEmail,TLtshirt,TM1Name,TM1Contact,TM1Email,TM1tshirt,TM2Name,TM2Contact,TM2Email,TM2tshirt,} = req.body;
  console.log(institute);

  const total = 800;
  const paid = 0;
  const selected = false;
  let error = "";

  ProgContest.findOne({ teamName: teamName, institute: institute }).then(
    (team) => {
      if (team) {
        error = "Team with same name and institution exists";
        req.flash("error", error);
        res.redirect("/ProgContest/register");
      } else {
        const participant = new ProgContest({teamName,institute,coachName,coachContact,coachEmail,coachTshirt,TLName,TLContact,TLEmail,TLtshirt,TM1Name,TM1Contact,TM1Email,TM1tshirt,TM2Name,TM2Contact,TM2Email,TM2tshirt,total,paid,selected});
        participant
          .save()
          .then(() => {
            error = "Team for Programming Contest has been registered successfully!!";
            console.log("save ", error);
            req.flash("error", error);
            res.redirect("/ProgContest/register");
          })
          .catch(() => {
            error = "Unexpected error";
            console.log("error ", error);
            req.flash("error", error);
            res.redirect("/ProgContest/register");
          });
      }
    }
  );
  //   res.render('math-olympiad/register.ejs')
};

const getPCList = (req, res) => {
  let all_participant = [];
  let error = "";
  ProgContest.find()
    .then((data) => {
      all_participant = data;
      res.render("prog-contest/teamList.ejs", {
        error: req.flash("error"),
        participants: all_participant,
      });
    })
    .catch(() => {
      error = "Failed to fetch participants";
      res.render("prog-contest/teamList.ejs", {
        error: req.flash("error", error),
        participants: all_participant,
      });
    });
  // res.render("math-olympiad/list.ejs");
};
const deletePC = (req, res) => {
  const id = req.params.id;
  console.log("id ", id);

  let error = "";
  ProgContest.deleteOne({ _id: req.params.id })
    .then(() => {
      error = "";
      req.flash("error", error);
      res.redirect("/ProgContest/list");
    })
    .catch(() => {
      error = "Failed to delete data!";
      req.flash("error", error);
      res.redirect("/ProgContest/list");
    });
  // res.render('math-olympiad/register.ejs')
};

const paymentDonePC = (req, res) => {
  const id = req.params.id;

  ProgContest.findOne({ _id: id })
    .then((participant) => {
      participant.paid = participant.total;
      participant
        .save()
        .then(() => {
          let error = "Payment completed succesfully";
          req.flash("error", error);
          res.redirect("/ProgContest/list");
        })
        .catch(() => {
          let error = "Data could not be updated";
          req.flash("error", error);
          res.redirect("/ProgContest/list");
        });
    })
    .catch(() => {
      let error = "Data could not be updated";
      req.flash("error", error);
      res.redirect("/ProgContest/list");
    });
};

const getEditPC = (req, res) => {
  const id = req.params.id;
  // const tshirt=req.params.tshirt
  console.log("wd ", id, "  ");
  let info = [];
  ProgContest.findOne({ _id: id })
    .then((data) => {
      info = data;
     
      res.render("prog-contest/editTeam.ejs", {
        error: req.flash("error"),
        participant: info,
      });
    })
    .catch((e) => {
      console.log(e);
      error = "Failed to fetch participants";
      res.render("prog-contest/editTeam.ejs", {
        error: req.flash("error", error),
        participant: info,
      });
    });
};

const postEditPC = async (req, res) => {
  const {teamName,institute,coachName,coachContact,coachEmail,coachTshirt,TLName,TLContact,TLEmail,TLtshirt,TM1Name,TM1Contact,TM1Email,TM1tshirt,TM2Name,TM2Contact,TM2Email,TM2tshirt,} = req.body;
  


  const data = await ProgContest.findOneAndUpdate(
    { teamName: teamName, institute: institute },
    { coachName,coachContact,coachEmail,coachTshirt,TLName,TLContact,TLEmail,TLtshirt,TM1Name,TM1Contact,TM1Email,TM1tshirt,TM2Name,TM2Contact,TM2Email,TM2tshirt, });
  if (data) {
    console.log("findOneAndUpdate prog contest ", data);
    res.redirect("/ProgContest/list");
  }
};
const selectPC = (req, res) => {
  const id = req.params.id;

  ProgContest.findOne({ _id: id })
    .then((participant) => {
      participant.selected = true;
      participant
        .save()
        .then(() => {
          let error = "Participant has been selected succesfully";
          req.flash("error", error);
          res.redirect("/ProgContest/list");
        })
        .catch(() => {
          let error = "Data could not be updated";
          req.flash("error", error);
          res.redirect("/ProgContest/list");
        });
    })
    .catch(() => {
      let error = "Data could not be updated";
      req.flash("error", error);
      res.redirect("/ProgContest/list");
    });
};

module.exports = {getPC,postPC,getPCList,deletePC,paymentDonePC,selectPC,getEditPC,postEditPC};