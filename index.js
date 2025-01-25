document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById("date");
    const result = document.getElementById("result");
    const calculateBtn = document.getElementById("calculate-btn");

    // Establecer la fecha máxima para el input de fecha
    dateInput.max = new Date().toISOString().split("T")[0];

    calculateBtn.addEventListener('click', () => {
        const birthDate = new Date(dateInput.value);
        const today = new Date();

        let d1 = birthDate.getDate();
        let m1 = birthDate.getMonth() + 1;
        let y1 = birthDate.getFullYear();

        let d2 = today.getDate();
        let m2 = today.getMonth() + 1;
        let y2 = today.getFullYear();

        let d3, m3, y3;

        y3 = y2 - y1;

        if (m2 >= m1) {
            m3 = m2 - m1;
        } else {
            y3--;
            m3 = 12 - (m1 - m2);
        }

        if (d2 >= d1) {
            d3 = d2 - d1;
        } else {
            m3--;
            d3 = getDaysInMonth(y2, m2 - 1) + d2 - d1;
        }

        if (m3 < 0) {
            m3 = 11;
            y3--;
        }

        result.innerHTML = `Tu edad es ${y3} años, ${m3} meses y ${d3} días.`;
    });

    function getDaysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }
});