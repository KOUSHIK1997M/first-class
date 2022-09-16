
//==========================================> (Verify any space between two word) <=====================//

function whitespace(str) {
    return str.indexOf(" ") >= 0
}

//==========================================> (rEGEXS) <=================================================//

let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')


//==========================================> (nAME VALIDATION ) <=======================================//

const isValidsName = function (name) {
    try {
        //------------------------------------> (name must be present.) <-------------------------------//

        if (!name) {
            return "intern name is required."
        }

        //------------------------> (If name must be string) <----------------------------------------//

        if (typeof (name) != 'string') {
            return "intern name should be string."
        }

        //------------------------> (If title must be a content) <--------------------------------------//

        let regex1 = (/^[a-zA-Z ]*$/.test(name))
        if (regex1 == false) { ///^(?![\. ])[a-zA-Z\. ]+(?<! )$/
            return "intern name should be letters." //&& whitespace(fullname)
        }

        //------------------------> (END FUNCTION) <--------------------------------------//

    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


//-=======================================> (vERIFY EMAIL ID) <==========================================//


const isValidEmail = function (email) {
    try {
        //------------------------------------> (EMAIL ID must be present.) <-------------------------//

        if (!email) {
            return "email is required."
        }

        //------------------------> (If EMAIL ID must be string) <-------------------------------------//

        if (typeof email !== 'string') {
            return "email should be string."
        }

        //------------------------> (If Make sure email should not have space) <----------------------//

        if (whitespace(email)) {
            return "Make sure email should not have space." //&& whitespace(name)
        }

        //------------------------> (If Make sure email IS VALIDE EMAIL ID) <-------------------------//

        let EmailId = regex.test(email)
        if (EmailId == false) {
            return "Invalid email id." //&& whitespace(name)
        }

        //--------------------------------------> (END FUNCTION) <---------------------------------//

    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


//-=======================================> (vERIFY MOBILE NUMBER) <==========================================//


const isValidMobile = function (mobile) {
    try {
        //------------------------------------> (Mobile number must be present.) <--------------------------//
        if (!mobile) {
            return "mobile is required."
        }
        //------------------------> (If title must be string) <-------------------------------------------//
        if (typeof mobile !== 'string') {
            return "mobile should be in string."
        }
        //------------------------> (Make sure mobile should not have space) <----------------------------//
        if (whitespace(mobile)) {
            return "Make sure mobile should not have space." //&& whitespace(name)
        }
        // //------------------------> (Mobile number validation ) <--------------------------------------//
        let regex1 = /^((0091)|(\+91)|0?)[6789]{1}\d{9}$/

        if (!(regex1.test(mobile))) {
            return "mobile should be of 10 digits."
        }
        //------------------------------------> (END FUNCTION ) <------------------------------//

    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


//-=======================================> (vERIFY COLLEGE NAME) <==========================================//


const isValidcollegeName = function (name) {
    try {

        //------------------------------------> (name must be present.) <--------------------------------//
        if (!name) {
            return "college name is required."
        }
        //------------------------> (If COLLEGE NAME must be string) <---------------------------------------//
        if (typeof name !== 'string') {
            return "collge name should be string."
        }
        //------------------------> (Make sure college name should not have space.) <----------------------//
        if (whitespace(name)) {
            return "Make sure college name should not have space." //&& whitespace(name)
        }
        //-------------------------> (COLLEGE NAME REGEX VALIDATION) <-------------------------------------//
        if (!(/^(?![\. ])[a-zA-Z\. ]+(?<! )$/.test(name))) {
            return "collge name should be letters." //&& whitespace(name)
        }

        //---------------------------------> (END FUNCTION) <-------------------------------------------//

    }catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}




module.exports = {isValidsName, isValidEmail, isValidMobile, isValidcollegeName}