/*document.addEventListener('DOMContentLoaded', function() {
        // Reference to the lookup button and input field
        var lookupButton = document.getElementById('lookup');
        var countryInput = document.getElementById('country');
    
        // Add a click event listener to the lookup button
        lookupButton.addEventListener('click', function() {
            // Get the value entered in the country input field
            var country = countryInput.value;
    
            // Make an AJAX request to the server
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'world.php?country=' + encodeURIComponent(country), true);
    
            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 400) {
                    // Update the result div with the response from the server
                    document.getElementById('result').innerHTML = xhr.responseText;
                } else {
                    console.error('Error: ' + xhr.status);
                }
            };
    
            xhr.onerror = function() {
                console.error('Request failed');
            };
    
            // Send the request
            xhr.send();
        });
    });

    */

    document.addEventListener('DOMContentLoaded', () => {
        const lookupButton = document.getElementById('lookup');
        const countryInput = document.getElementById('country');
        const lookupCitiesButton = document.getElementById('lookupCities');
        
    
        lookupButton.addEventListener('click', () => lookupData('country'));
        lookupCitiesButton.addEventListener('click', () => lookupData('cities'));
    
        async function lookupData(lookupType) {
            const country = countryInput.value;
    
            try {
                const response = await fetch(`world.php?country=${encodeURIComponent(country)}&lookup=${encodeURIComponent(lookupType)}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
    
                const result = await response.text();
                document.getElementById('result').innerHTML = result;
            } catch (error) {
                console.error('Request failed', error);
            }
        }
    });
    

