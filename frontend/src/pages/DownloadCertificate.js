import React from "react";
  
const Downloadpdf= () => {
  
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('embedded.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Certificate.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
            <center>
                <h3>Click on below button to download PDF file</h3>
                <button onClick={onButtonClick}>
                    Download PDF
                </button>
            </center>
        </>
    );
};
  
export default Downloadpdf;