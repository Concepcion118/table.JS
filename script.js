$(() => {
    console.log(".NET MAUI")

    fetch("data.json")
    .then((rawData) => rawData.json())
    .then(data =>{
          console.log(data);
            const semlevels =[
                "First Year, First Semester",
                "First Year, Second Semester",

                "Second Year, First Semester",
                "Second Year, Second Semester",

                "Third Year, First Semester",
                "Third Year, Second Semester",
            ]
            $("#table-with-data").append(
                
                <tr>
                    <td>NSTP</td>
                    <td>Civic Welfare Training Service 1</td>
                    <td>3.0</td>
                    <td>1.0</td>
                    <td>Passed</td>
                    <td>First Semester A.Y 2023-2024</td>
                </tr>
                
            )

            data.forEach()
            $("#table-with-data").append(
                <tr>
                    <td>WEBTEC</td>
                    <td>Website Technology</td>
                    <td>3.0</td>
                    <td>1.0</td>
                    <td>Passed</td>
                    <td>WEBTEC</td>
                    <td>S.Y 2024-2025</td>
                </tr>
            )

            //
            data.forEach(Course => {
                if(Course["semlevel"] - 1 == semlevel)
                $("#table-with-data").append(
                    <tr>
                        <td>${Course["Course"]}</td>
                        <td>${Course["Description"]}</td>
                        <td>${Course["Unit"]}</td>
                        <td>${Course["Grade"]}</td>
                        <td>${Course["ReMarks"]}</td>
                        <td>${Course["Course"]}</td>
                        <td>${Course["Term"]}</td>
                    </tr>
        
                )
                semCount++;
            });

        
        courseData = data;

    })
    console.log(courseData);
});