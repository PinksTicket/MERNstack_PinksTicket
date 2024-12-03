const roleToggle = document.getElementById('role-toggle');

        roleToggle.addEventListener('change', () => {
            const role = roleToggle.checked ? 'Admin' : 'User';
            // alert(`You are logging in as: ${role}`); // Corrected template literal
            alert("You are logging in as: " + role); // Using string concatenation
            console.log('Role selected:', role);
        });

document.querySelector('form').addEventListener('submit', async function (e) {
        e.preventDefault();

        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const result = await response.json();
            if (response.ok) {
                alert(result.message); // Alert login success message
                window.location.href = 'index.html'; // Redirect to main page
            } else {
                alert(result.message); // Alert invalid credentials
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong');
        }
    });
