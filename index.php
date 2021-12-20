<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Address API</title>

    <style>
        * {
            margin: 0;
            box-sizing: border-box;
        }

        html {
            width: 100%;
            height: 100%;
        }
        main {
            margin: 5% auto;
            width: 80%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
       
        #form_postcode {
           display: flex;
           /* justify-content: center; */
           
        }

        span, ul {
            text-decoration: none;
            font-weight: normal;
        }

    </style>

</head>
<body>
    <main id="main_div">
        <div class="wrapper">
            <h1 style="text-align:center"><u>Find Cites</u></h1>
            </br>
            <section>
                <p><b>Valid Postcodes:</b> (2000, 2204, 2150, 2170, 3012, 3020)</p>
            </section>
            </br>
            <form action="" method="post" id="form_postcode">
                <input type="number" id="postcode" placeholder="Enter Postcode" required></input>
                <input type="submit" placeholder="Find Cities"></button>
            </form>
            </br>
            <div class="data_cont" id="data_cont"></div>
        </div>
    </main>
    <script src="api_generator.js" defer></script>
</body>
</html>