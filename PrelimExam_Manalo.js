function confirmPass() {
    var password = document.getElementById("password").value
    var confirmPassword = document.getElementById("confirmPassword").value
    if (password != confirmPassword) {
        alert("Password did not match. Try again!");
        return false;
    } else if (password == confirmPassword){
        alert("Password Match!");
        return true;
    }
}
let NewMember_Array = [];
        const addMember = (ev) => {
            ev.preventDefault();
            let member =
            {
                FirstName: document.getElementById("fname").value,
                LastName: document.getElementById("lname").value,
                Gender: document.getElementById("gender").value,
                DateOfBirth: document.getElementById("dateOfBirth").value,
                Address: document.getElementById("address").value,
                Country: document.getElementById("country").value,
                Username: document.getElementById("username").value,
                Password: document.getElementById("password").value,
                ConfirmPassword: document.getElementById("confirmPassword").value
            }

            NewMember_Array.push(member);
            document.querySelector('form').reset();

            console.log('New Member Added!', { NewMember_Array });
            let pre = document.querySelector('#res pre');
            pre.textContent = '\n' + JSON.stringify(NewMember_Array, '\t', 2)
        }
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById("submit").addEventListener("click", addMember)
        });