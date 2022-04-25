# Apply Forms with Speech - Thesis Project

A web application to apply forms with speech functionality from people with special needs.

## Description

A Thesis project under the supervision [IHU-Department of Computer, Informatics and Telecommunications Engineering (Serres)](http://ict.ihu.gr/). Is a web based application for apply forms with voice functionality. It uses Speech to text libraries to recognize speech and record it to convert it to text eventualy.

## Getting Started

### Dependencies

* Node.js ,need to have before try run the application

### Installing

* First, [Clone](https://github.com/TsolosT/Thesis-Project.git)  or  download it as zip (check above)
* Then go to project folder  and `npm install `
### Executing program

* Go to root folder of the project
* Run `node app.js` or `nodemon` (if you have nodemon installed)
* Open your browser at localhost and navigate with tab key and enter to open an link 
* Navigate to forms inputs, then press enter speak when you pause press tab to navigate to next input , repeat till the end of the form

## Tips

* Speak steadily and slowly to get the most out of speech recognition.

## Version History

* 0.7.8
    * Feat: New light theme for UI
    * Fix: responsive mobile bugs
* 0.7.5
    * fix:  rendering values to template bug
    * Feat: change inputs to simple steps
* 0.7
    * Feat: Set GR as primary lang for speech recognition
    * Feat: split date and address to multiple fields
    * style: show input text value upper case
* 0.6.8
    * style: clean up code
* 0.6.7
    * fix: bug uuide path bug
* 0.6.6
    * fix: bug user couldnt create auth pdf
* 0.6.5
    * Feat: added  pdf for download functionality
* 0.6
    * Feat: added html to pdf functionality
* 0.5
    * Feat: user can apply affirmation form 
    * fix: outdated packages
    * Feat: now user can see timestamp of forms
* 0.4.4
    * Feat: user can navigte with keyboard 
* 0.4.2
    * Style: added no support class 
    * Fix: form post route
* 0.4.1
    * Feat: added Accesibility Content - ARIA
* 0.4
    * Feat: Remove Google Cloud Speech Api
    * Feat: Speech to text functionality added
        - Added forms templates
        - Added basic form model
    * Style: change content and tile  font sizes
    * Feat: added 404 page   
* 0.3.5
    * Feat: Added Google Cloud Speech Api
* 0.3.1
    * updates packages
* 0.3
    * Feat: Added Basic Form
* 0.2
    * Feat: Added Basic Design 
* 0.1
    * Initial Release
## License

This project is licensed under the [MIT](https://github.com/TsolosT/Thesis-Project/blob/main/LICENSE) License - see the LICENSE.md file for details
