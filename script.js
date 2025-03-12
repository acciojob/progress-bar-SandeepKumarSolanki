//your JS code here. If required.

document.addEventListener("DOMContentLoaded" , ()=> {
	let prevBtn = document.getElementById("prev");
	let nextBtn = document.getElementById("next");
	const progressCircle = document.querySelectorAll('.circle-container')
	progressCircle.forEach((cir , index) => {
		nextBtn.addEventListener("click" , ()=>{
			if (cir.value && index < cir.length - 1) {
				cir.style.backgroundColor = "wheat";
                // Focus on next input field after typing
                cir[index + 1].focus();
            }
		})
	})
})