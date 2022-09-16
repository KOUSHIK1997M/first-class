
//==========================================> (Verify any space between two word) <=====================//

function whitespace(str) {
    return str.indexOf(" ") >= 0
}


//==========================================> (Name verify function) <===============================//

const isValidName = function (name) {
    try {

        //------------------------------------> (name must be present.) <----------------------------//

        if (!name) {
            return "college name is required."
        }

        //------------------------> (If name must be string) <--------------------------------------//

        if (typeof name !== 'string') {
            return "collge name should be string."
        }

        //------------------------> (If college name should not have space) <---------------------//


        if (whitespace(name)) {
            return "Make sure college name should not have space." //&& whitespace(name)
        }

        //------------------------> (If collge name should be letters) <---------------------//

        if (!(/^(?![\. ])[a-zA-Z\. ]+(?<! )$/.test(name))) {
            return "collge name should be letters." //&& whitespace(name)
        }

        //------------------------> (END API ) <--------------------------------------------//

    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


//====================================> (Verify Full name function ) <============================//


const isValidfullName = function (fullName) {
    try {

        //-----------------------------> (full name must be present.) <---------------------------------//

        if (!fullName) {
            return "college fullName is required."
        }

        //------------------------> (If full name must be string) <------------------------------//

        if (typeof fullName !== 'string') {
            return "collge fullName should be string."
        }

        //------------------------> (If collge fullName should be letters) <-----------------------//


        if (!(/^(?![\. ])[a-zA-Z\. ]+(?<! )$/.test(fullName))) {
            return "collge fullName should be letters." //&& whitespace(fullname)
        }

         //------------------------> (END function) <-----------------------//
    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


//====================================> (Verify Logolink function ) <============================//

const isValidLogoLink = function (logoLink) {
    try {
        //-----------------------------> (Logo link must be present.) <------------------------------//

        if (!logoLink) {
            return "college logoLink is required."
        }

        //------------------------> (If logo link must be string) <------------------------------//

        if (typeof logoLink !== 'string') {
            return "collge logoLink should be string."
        }

        //------------------------> (Make sure logoLink should not have space) <---------------------//

        if (whitespace(logoLink)) {
            return "Make sure logoLink should not have space." //&& whitespace(name)
        }

        //------------------------------------> (please enter valid logoLink) <-------------------------//

        let isURL = logoLink.match(/^https?[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) != null

        if (isURL == false) {
            return "please enter valid logoLink"
        }

        //------------------------> (END FUNCTION ) <-------------------------------------//


    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}



module.exports = { isValidName, isValidfullName, isValidLogoLink }