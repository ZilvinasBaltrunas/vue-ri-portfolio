<template>
    <div class="qualifications-container">
        <h1 class="title">Qualification & Skills</h1>
        <div class="qualification">
            <h2>Qualification certificates :</h2>
            <hr>
            <ul v-for="certificate in certificates" class="certificate__list">
                <li>
                    <p>{{certificate.date}}</p>
                    <p>{{certificate.number}}</p>
                    <p>{{certificate.content}}</p>
                    <hr>
                </li>
            </ul>
        </div>
        <div class="training">
            <h2>Professional Qualification Training :</h2>
            <hr>
            <ul v-for="training in trainings" class="training__list">
                <li>
                    <p>{{training.date}}</p>
                    <p>{{training.title}}</p>
                    <p>{{training.content}}</p>
                    <p>Pažymėjimas</p>
                    <hr>
                </li>
            </ul>
            <!--  -->
            <div class="certificate-image">
                <img id="myImg" src="../assets/images/cer.jpg" alt="Snow" style="width:100%;max-width:200px">
                <!-- The Modal -->
                <div id="myModal" class="modal">
                    <span class="close">&times;</span>
                    <img class="modal-content" id="img01">
                    <div id="caption"></div>
                </div>
                <!--  -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Qualifications',
    data () {
        return {
            certificates: [
                {
                date: '2010-03-26',
                number: 'Nr. 25672',
                content: 'Suteikta teisė eiti ypatingo statinio projekto dalies ekspertizės vadovės, ypatingo statinio specialiųjų statybos darbų vadovės ir ypatingo statinio specialiųjų statybos darbų techninės priežiūros vadovės pareigas Statinių grupės: visos statinių grupės. Projekto dalis: vandentiekio ir nuotekų šalinimo. Specialieji statybos darbai: vandentiekio ir nuotekų šalinimo tinklų tiesimas, statinio vandentiekio ir nuotekų šalinimo inžinerinių sistemų įrengimas.'
                },
                {
                date: '2010-03-26',
                number: 'Nr. 25673',
                content: 'Suteikta teisė eiti ypatingo statinio projekto vadovės, ypatingo statinio projekto vykdymo priežiūros vadovės ir ypatingo statinio statybos vadovės pareigas Statinių grupės: inžineriniai tinklai: vandentiekio ir nuotekų šalinimo; kiti statiniai: vandenviečių statiniai ir nusodintuvai, nuotekų valyklos.'
                },
                {
                date: '2014-04-04',
                number: 'Nr. 23912',
                content: 'Suteikta teisė eiti ypatingo statinio projekto dalies vadovės ir ypatingo statinio projekto dalies vykdymo priežiūros vadovės pareigas Statinių grupės: visos statinių grupės. Projekto dalys: vandentiekio ir nuotekų šalinimo, aplinkos apsaugos, pasirengimo statybai ir statybos darbų organizavimo, statybos skaičiuojamosios kainos nustatymo, ekonominė, sąnaudų kiekių žiniaraščiai.'
                }
            ],
            trainings: [
                {
                date: '2010 m. vasario 10 d.',
                title: 'UAB „Ekspertų mugė“',
                content: 'Skelbiamų ir neskalbiamų viešųjų pirkimų vykdymo CV PIS praktika, dažniausiai daromos klaidos ir kylantys klausimai',
                link: '../assets/images/cer.jpg'
                },
                {
                date: '2009 m. birželio 5-6 d.',
                title: 'Chmieliauskas ir Ramonas Consulting',
                content: 'Projektų valdymas'
                },
                {
                date: '2009 m. sausio 14-15 d.',
                title: 'UAB „IN RE“',
                content: 'Vandens tiekimo bei buitinių ir lietaus nuotekų šalinimo sistemų projektavimas, analizė ir optimizavimas panaudojant Bentley Haestad programinę įranga'
                },
                {
                date: '2008 m. spalio 21 ir 24 d.',
                title: 'Jungtinės veiklos grupė UAB „APVG“ ir UAB „Arginta“',
                content: 'Statybos projektų ir statybos darbų rangos sutarčių rengimas bei administravimas pagal Tarptautinės inžinierių konsultantų federacijos FIDIC reikalavimus'
                },
                {
                date: '2007 m. gegužės 30 d.',
                title: 'UAB „LSPI“',
                content: 'Statybos darbų rangos sutarčių rengimas bei administravimas pagal Tarptautinės inžinierių konsultantų federacijos FIDIC reikalavimus'
                }
            ]
        }
    },
    mounted() {
        // Get the modal
        var modal = document.getElementById('myModal');
        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img = document.getElementById('myImg');
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() { 
            modal.style.display = "none";
        }
    }
}
</script>
<style lang="scss">
    .qualifications-container {
        background: #fff;
        width: 100%;
        padding: 1rem;
        .title {
            margin-top: 0;
            margin-bottom: 0;
            color: #b30000;
        }
        .qualification {
            margin-bottom: 5rem;
            .certificate__list {
                li {
                    text-transform: none;
                }
            }            
        }
        .training {
            .training__list {
                li {
                    text-transform: none;
                }
            }
        }
    }


    #myImg {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg:hover {opacity: 0.7;}

/* The Modal (background) */
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

/* Modal Content (image) */
.modal-content {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
}

/* Caption of Modal Image */
#caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    height: 150px;
}

/* Add Animation */
.modal-content, #caption {    
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
}

/* The Close Button */
.close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
}

.close:hover,
.close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
    .modal-content {
        width: 100%;
    }
}
</style>
