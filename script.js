const apiUrl = 'https://74an5y1o1j.execute-api.us-west-2.amazonaws.com/prod/visitor-count';

async function getVisitorCount() {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // Log the data to inspect the API response
        
        if (data && data.count !== undefined) {
            document.getElementById('visitor-count').textContent = data.count;
        } else {
            throw new Error('Invalid data format');
        }
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        document.getElementById('visitor-count').textContent = 'Error loading count';
    }
}

// Fetch and display visitor count on page load
getVisitorCount();
