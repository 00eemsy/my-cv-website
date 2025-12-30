import "../../fonts.css";
import "./elevatorPitch.css";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
// import { type } from "@testing-library/user-event/dist/type";

const ElevatorPitch = (() => {
    
    const [typey, setTypewriter] = useState(null);
    const [typey2, setTypewriter2] = useState(null)


    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {

                if (entry.isIntersecting) { // when a singular pixel of *ੈ₊˚ELEVATOR PITCH is on-screen...
                    const typewriter = ( // ... define a typewriter element ...
                        <Typewriter
                            onInit={(typewriter) => {
                                // typewriter.deleteAll();
                                typewriter.typeString('... plus materialUI, RESTful APIs, node.js, tailwindCSS, cypress, express.js, socket.io, mips assembly, and more!');
                                typewriter.start();
                            }}>
                        </Typewriter>
                    );

                    const typewriter2 = (
                        <Typewriter
                            onInit={(typewriter2) => {
                                typewriter2.typeString('... plus jira, agile/scrum methodologies, google/microsoft suites, and mandarin chinese!');
                                typewriter2.start();
                            }}>
                        </Typewriter>
                    )

                    setTypewriter(typewriter); // ... and update state so it appears on-screen!
                    setTypewriter2(typewriter2);

                    observer.unobserve(entry.target); // also de-init observer 

                    }
                })
            });

        observer.observe(document.getElementById('elevatorPitchTitle'));

        });

    return (
        <div className="elevatorPitch" id="elevatorPitchTitle">
            <h1 id="elevatorPitch">
                <span className="pixel">*ੈ₊˚</span><span className="cursive">E</span> <span className="pixel">LEVATOR PITCH</span>
            </h1>
            
            <div className="flexy">
                <div className="inline">
                    <div className="big-flexy" id="big-flexy-1">
                        <h2 className="pixel" id="MAAG">ME AT A GLANCE</h2>
                            <div className="pixel box box-inline">
                                <ul>
                                    <li>aspiring <strong>webdev/product manager</strong>... </li>
                                    <li>... with a strong technical foundation in webdev (think react, javascript, etc.) and object-oriented programming (think python, c++, etc.) 🐍⚛️☕!</li>
                                        <ul>and practical product management experience during my dev work (think agile, scrum, product design, etc.)!</ul>
                                    <li>currently a senior studying computer science @ reed college (located in the beautiful portland, or 🌲)</li>
                                    <li>past exp: ux researcher @ reed (thesis research on elderly accessibility! 🥳), swe intern @ disney, webdev intern @ sciquel (a harvard innovation labs startup) 🐭</li>
                                    <li>proud to be a first-generation, taiwanese-american woman in tech!!! 👩🏻‍💻🇹🇼</li>
                                    <li>now the fun stuff: i'm a san franciscan, born and raised 🌁! i also ADORE kitties 🐈‍⬛ and will kick your butt at mahjong. 🀄</li>
                                    <li>welcome! 🫶</li>
                                </ul>
                            </div>
                    </div>

                    <div className="flexyCol big-flexy" id="big-flexy-2">
                        <h2 className="pixel">MY SKILLS</h2>
                        <div className="box small-box box-inline">
                                <div>
                                    <h3 className="pixel"><strong>NON-TECHNICAL</strong></h3>
                                    <div className="inline" id="stacks">
                                        <img title="figma"
                                            alt= "figma logo"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABfElEQVR4nO2ZXW6DMBAG5w4NuVaViN6nhRwvBG4SfvoaqJCMivJAMNu1LZdP8lOyxCM7WOOFPfHkCORACXwDw8KYsvSd8Rk3IAMSVxAp0L6YmC3IfDTA2QVEbzGpLSAD8ABOmtvJZiUkIANQAwcNkHzDZCQgA/ClAVJ5ALlpgHQeQFoNkNYDSKMBUnoAKTRAMg8gnxogiVlqVyB34A2lnM1hpQ3yAN5RzskcVlogdxcQUw7msCpWvJbXgIxvxKv5T6htpz2x+shz/WVWP/lIbj4L2kemfLyob81vBOsjE8Sa+l4TRuojtvWNlvZKfeSyoTYL0UeqWHyki8VH2lh8pAxla2VCkDyUy4dE6CO2r99a6zpI6iM2B2rv4rZxq4/MYZZWtnYBIfGR522azerHUZhnqm2nPf/BR4JIKvSRIJIKfSSIHIU+EkzyDRBBglSxgHSxgLSh+IQ0ZSj9DR8+otLfcO0jqv0NVz7ipL+h7SNO+xt/7SN7f2MPv/kBC39E7GnfwCQAAAAASUVORK5CYII=">                            
                                        </img>
                                        <img title="github"
                                            alt="github logo"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nO2ZSWgVQRCGP2OCS3CJYoy7uCtiDi6o8aAIikvQi4oGvCiiRo2E6FXJQdxQg4LgUTx4cyPuHhVRD0bcsyDu4IJrTNTnSEMNPOfNm1czb2YSJD8UDNNT1fV3V1dX90AH/l8UAEuBfUAt8Bj4CLSKmOdH0ma+WQL0pp2gC1AGXAJ+A5ZPMToXgFViK3Z0AyqBVwGcTycvga1A17hILAAaQiTglHpgfpQEzNTXREjAKcdl5kNFf+BOjCQskVtAYVgkhst0W20kT8WHrNBP0qjVxtIAFAUl0bWNwsnyCLNAKfpoO3DecsjhICnWy+B2CbspwA7gWRbOmd1+G1As1cGBDN/P05LoptgnBruEoSH0A7gKVACzgNFAvsgYebcROAN8BTYDnR22ihWLXxVilYpRTLf75mlHy+PbAYr+zUB5oouy7Ah9o0pCkaL/F5lmpUwZ1+MiJFKi9GGll5FLSiPLIyRSrvThfDoDBT5K8eoIiRxT+vAL6OlmYKnSwGdZkFFhPPBT6Uupm4H9SmWT56PGSaUve92Ua5XK02Igskzpy1k35afKuMyNgchYJRFT0KbgvULRfBMHhiiJvHNTblUomm86xUBkoiMKPor8cfjT4qZsZ4rZUu+MAPoAA+XZljiIJCNXtoYC6dtUFYOSBjYFn6TxJnAXaJRQeiPPtqwgehz2iIrvScvAzFIKnkjjNUmxWyRPm4p1khw37VGJGjnS11BggmTKRVI575a7MPsIkIKL0rhLqsuDwCngOlAns/FBpnN1xLPRIqPdBDwAbgPngCNyFtrvVaZUKzOFkW8yU2FjncuC9pKdbkbm+jBgpBlYE1KomZJ8j08SRua4GeuuTMFOuSFryXnS0yBfBqMxQL8tXucie504xZxT1soGlM7wW+AEsEFGaiTQK8l2XznHmOvQKikvvgYgYImYkiotSj1SXomcwd8qw65KbihtFMq75iyct5JkYaa015RGsU7apwJfMpAwpNOhJAQy9eKLJyo8DJhcbpcQFyU07J84z4ErwOJMHQDrsyRSrr3duBckLn0gx6MPK4Pc9VOBzwQSLkYSIe4fGwKQSADT/XZ0JI2xT3KxNlgTpx4YFYBITZCO8qTu8tNRZ5/2/di+7PMC8B/09BnLfqG1+yCMP8DDgIdtSOS+nBhDQQ+pNOMmciWKf/F5UmInYiCSAA5FfdExWc4HURGpA2YQE3IlBTc4fvj7xeskfWNrU0zXTSnIkbLldFL54gelorswyz2pAx0gIvwFLXDNiM6zHVAAAAAASUVORK5CYII="></img>
                                        <img title="microsoft excel"
                                            alt="microsoft excel logo"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQ0lEQVR4nO2aP2gUQRSHv2hUTIighUKIKCksYpFS0BAsjqCFBAtFECyusohYhnR2qY8UQUuxOEICAQUNoghRIcHu0AODzYqQiBIb/3DJZcLCFMtjdvfu9m5udt0H0+z8mHnfzJudfTsDnbUDwDngJjALvAA2gVUctkPAeeAOUAJeAj8BFVKcsGPAGHAfeAi8Bf5FOO0EyCBQ0E4/Bj4Ce006bRXkIDAMXAMeAE91PCd12BrIFLAG/Omg01ZAapYBJEiSNr4CV9vRULdBFOBlBUTlIOQzQh5apGCNSD/i7P8F+QEsiPIsQr9h0G+58PrdBUYNI7Ieor8odCMxXw3WQJROgHqEg9cNuiUD8OsGQ8sKiAJuCAd9sIqYOX/0g3a70c5tgnhAf4SjjwxJ1zcXQZTOT2Tu8hn4C5wWdaVmOjcAxVkiED9XOSsavAfMi2f+y2HHZRAFLIoGTwIXxNp512w42A4tpctExEgVW+m8WyAVoNcAcRz4niaQKnDEAHIU+JIWkDpwKSK0rqQFZE44XtAhFbTlFkCkH3GWCMTfFAdEg2Xgrnh2BvjtMsikYb+o6x28T9TNuBpaZcOorATqp0XdYeCTayC/9L/foF0Wmm3ghNCMN/B/2CpIUTjo794fDDr/7EPaE1dA3hhykVsR32JDQntKz1bXQZ7rs49g8SL07w36qgsgqsNFWtjzMF0Oojo0I5kJLZWDkM8IeWhh4eitluLF7umELlvH05m5MJC5KxyZv1ST6WtONGhhF89etbunff2PxYbOJ1FbAAAAAElFTkSuQmCC"></img>
                                        <img title="microsoft word"
                                            alt="microsoft word logo"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACtUlEQVR4nO2aO2gVQRSGP42vSLAQG0ULRSx8IT5AE7GyUMFGRMQixsY3pkhhJQiC2igIIohXQREFEUS0EIIWKkjwglqkkHTXQgVtUiQaTUYGzsLhsEl2k+zuZN0Dy917zn/nzLc7s7MzdyBbmwmsAg4Al4AXwDfgDQHbbGAN0A5cA7qBn4Ab5QjCFgDbgU7gJvAW+DVGpYMAWQLslErfA3qBkZSVzhWkCVgB7AXOA8+kPU+2wrmBnAZ6gIEMK50LyFDOABZkMmV8AXZPRUFFgzigURYQV4FQ3RGqpsU06CNpzf13IA3gkTri3mB7VPxJTPyrKWO4iMfve3MFHsdothmNha2p2LJx7khmIL+BuSrRBRP3rzTNBuSV0XSp2L6iQBywWSU6ZGL1mHZ71Wj2qNjFIkFOqEQbTOxGDEi70SxXse4iQWoq0Tzgr4odEf8imcN4W6fiAzJX9zZjjOnuRM2lAfloftynYqvF1wYslvNZwKDEP6jfrRzvKmYN8sd06Kfi71dXuwPYqjR10TxQvoMJQDJtWg5oVckui++l8l0HTqrvNdGcU74rIYCcUckOi8+vTUXmB8XbZsrsNfuV73UIIHdVsi3i82NCtIY1aPpSm2j82hbSBPtDAOlVyVpkCWipfN8Y05dazGC6NknyPECGZSEusnfq/JjS6Q7/XJ13JARJay4tiD92qALOqvNbSnNK+Y+ah0EwIF2qAL9EGtknpbmj/OvNwyCIpuWAhyrhHPlslr4RaTxUZE3mYRAMSF/MrW01Gv/6Mt9oNiVNnhfICLDQVLIzwfzkeGggTlbitd2P0fjBkJhRPiiQupm2/ojRfDaa7yGCuIyOiZqrQMj2jpSmabkKhOqOUDUtcvjrbWgad/YGsKt0f0+XZsNA6bZwlH5TTam3OZHQRtt4plcsp8T+AV0JjLmQ5+PAAAAAAElFTkSuQmCC"></img>
                                        <img title="google sheets"
                                            alt="google sheets logo"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+0lEQVR4nO3UOwrCQBSF4dO7BR87chU2aYKlm3ATiqvRdWij2JpCjwgpZAphkvuIk/vDYJEifDmDQPSfLQEcATQAKHAeAGoPBJXOxhJyUkK82t+1FaRRglTWGCqdTysAT6trRkWIKYbKEDMMDSAmGBpB1DGWEFWMFmTy452Vxl+zFmSbgamHDMk5TSkQBuQr7yUYiyR5L8FYJMl7CcYiSaNapG8B0fpaks/oebWKgXQtIDmN8mqxFEjXApLTKK8WS4F0LSDSX8vi9M4bwIAkeS/BWCSpmEXuA0DcJCCHAUD2EpAFgIsj4gxgBqHmAHbtxFaAa/vOqRQigmFvj8z3jSBE9tUAAAAASUVORK5CYII="></img>
                                        <img title="google docs"
                                            alt= "google docs logo"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+ElEQVR4nO3Wva3CUAxA4dPDCsBEjEGRSMzCDvxMA3tAAzVpMIpEAbeARLm2Q+Ij3frpk+3wIPrPlsARqADJ8O5A4YEQhfcA1paQkyKkfqUVpFKClNYYUXp1qzeM+pppQkwxogwxw4gBxAQjRhB1jCVEFaMFmXz5m6XGp1kLsgGmDTFFnyFt/zfrnDdCftxUQCQmQqyWxI285f21kvhqJY1qIl0LSJu8V0ri2JPiRloUq9Um7yOX+B0Z87HLUFZLhgJpUkCI1frM+zYkJpLkPQmJiSQNZiK3HiCuOSCHHkB2OSAL4OKIOAMzMjUH9q8RW67TNiciwrAnvg0pCs3Ed8AAAAAASUVORK5CYII="></img>
                                    </div>

                                    <p className="pixel">
                                        {typey2}
                                    </p>
                                    
                                </div>



                                <div>
                                    <h3 className="pixel"><strong>TECHNICAL</strong></h3>
                                    <div id="stack" className="inline">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACAUlEQVR4nO2av0scQRTHP3hqqtMjnAmEBH9A2iDiH6CFkGAXtUkag0LEyiYQiNU1WonYaCE2VnoHUfEPEGxMY+F/IEmUJAoX7rhCTSYsTGR57Lor3t7M4nzgNbP3hvd933vLHHPgcDhuSwdQAqqAsiyqurZ8HCElCwpWEbEZR4iNTigRlThCVEoiEtMFKidEYLrTyjkiMN1p5RwRmO60co4ITHdaOUcEpjutnCMC051WzhGB6U4rGx2Js/dn4JX+id0MPAGGga20CPkDvIuoZUJ/zmohC3GKAeZsFvIXeCaeTQHrwAyQ0WtPgV2bhfwQ64MibwWYBn7bPiPfxfpAHfY2IuQSaBPPZoFa2oQo/UaSPAYKwFmahPwEekJqyAIfgXIahHjxSw96GM+BozQI+f8q3gb6Qup5CBynQYg/9oChgLz3JoVc3WHvgsjraoSQmn51Lot17+vg50HAsI8BxYA9yyK3NWkhO0C3zvNOrvO6wHNgXOzbKe43vNOuRw44FPvui9xHSQt5TXze+vJGAtyaBJaAD3rA/YwmLeTE58hNNAFffHmnAYfGMFoCHEtkRr4BvREiFgPyvgIvImrJhsxQIkK8uABW9eEvp7vodfwNcBCRtwa81MeTDNAO9AOfdJNUI4WYiPtzGVq0oFBVj+vpvBZTsdSJjbh/GHA4HFzzDyHa7x0cR+5hAAAAAElFTkSuQmCC"
                                            title="javascript"
                                            alt="javascript logo">
                                            </img>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABjklEQVR4nO2Wr0sEQRTHP/gD4bCcopgUBEHEZDQIFotgVcMVo8EitjMKgkXEf0CTzWA0CHpGBYOYBBHFYBGDSRwZGOF4zN7uyXkzg+8Djw379s33A7O7A4qiNMslYCKvWhERk0jlEjqgURFB6IBGRQShAxoVEYQOaFREEDqgURFB6IBGRQShAxoVEYQOaFRE8C9Ffkv9jDtgHZgBBoGyq1Fg1t17il1kF+gu0F+LWeS0if7rvxbZ9pTE12OfnRd9dlsdAPfAM3AGbAD9bvu1/WUvOm9I9B1m9L0BHzGLlETfSau3dbtExkXfCHCVokjV09sBLGe8E9GKvAMTGRk6gRXgJQURW6/AdIMsAxn/kOhEbH0Ce0BfRh77UbhNQaT+M1sFej0zFlMS+akHYNKzxZITMcCxmNETs8iCO299ee5tiRnDMYvYH6BlDFgD9t1Za9VzIq6kIJJHF3CTukgJOCq4TjARe67aAZaAKSdWdtc5YBN4bGKdlou0q3IJHdCoiOAigpAmp85laEVRaMg36b7oy/I7eqEAAAAASUVORK5CYII=" 
                                            title="typescript"
                                            alt="typescript">
                                            </img>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACH0lEQVR4nO3aT0sbQRjH8a8YiwrRHoq1f3xTkoOeijWtfQ0F8VwS/7wALR7al5C0UEGsYqElBMGKUOlFjEK0GCt6c2ThEUrcdTObTZ9Z2R88xw3zyczuzs4MpLm/6QNywAKwCfwG/gBXwDGwC3wE8kAWB/MAmAHqgGmxGsA0kMGRDAHfLQDNte5C72RkCJk26zPQpQmZjAFxU2OakK9NjSkBz6XKlpAvmpCzpsZ4gJuMWEJOFB2YGCFeqaW5IWUBePUpyRDTZqWQtEcsozq0eoA3MoVodOB+CIKYgGrIe2vKZn72BKj+p8a3CjH/VAUYDkP0AzsKCBuIAbblsyEws0oIW4gBCkGIh8B5giB/gUE/SF4REQVigJd+kOUEQpb8IFuKiJoME2NZ3tP1VmqKkIIsXBjLOvCDXCr1RBF4CvyKcP1FnJB9+TejLCIMyLVRECYIUouIeAbMA4cKPXoQ182eE4RRqqof5H2EH8oq9YSRWoxreQdFhAEm/CBZn5URlyFn8rDwTTFBkHeETON/JgCyHTaNRz5aKg5DfgCPaTHe5+RrYA04dQByKm15BXTTodgMQ6djYi61pBAS3iOlkH2UxEDCth/UchIjpKHHgBVLyF37KKuakPEYn1wvNCFdspnZLsJbpO7YW7vVeNPpjTYQ34BHOJIeOZZhsw1xBLyVa51LVpZfP8hBmrocrPEO2OzJnsscMAr0ajc2DR3KNd642oFqa6WvAAAAAElFTkSuQmCC"
                                            title="python"
                                            alt="python logo"></img>
                                        <img src="data:image/png;base64,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"
                                            title="react"
                                            alt="react logo"></img>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC5UlEQVR4nO1aTYiNURh+/GVqlBmlsFGku/E3yYKYjYVZUPJTKDaKjcJiLCgNFpSRZDX+iklkpZAxRFn4icUINRQJ05iIWYya4XL01rvQ17nve875vnPvSfPUu7nfeZ+fe8893/nOvcAo0sc6ACMATKI1AmCtS5ADCZg1SpFHFTsSMGqU2u4SZE0CRo1S5FHF0gSMGqWWuASZnYBRo9QslyCTEjBqlKqHI4YSMGsqFHlzxrsEDJsK9dYnyCOBiK41Rq6Hir4zrglEbxAfrwV98uaM0wLRIOJjUNDv8CE6rMzTungZUKdoH/Ih26mQzbT0NBT0/ZiraJM3Z2xQyBZbegaqtGqt9wnSrJCtsvS8qFKQZp8gJYVsm6XnbpWClHyCNCpk+yw9l6oUpMEnyBgAwwLZSUvPiSqEGGZvXvgoEF5BPFwWdD+EED4TCO8jHu4Juk9DCG8KhK8QDy8F3RshhOcFwq+Ihy+CLnnyxhGB8A+AOfyklqfGZTTHA/gt6B4NCbKnCqtQds82XRm/OyTI5sghvls0Fyo9m0KCrIgcpNeiuVLpIU/e0HahPwB8y9RPjyAPLJpblJ55IUGmKqR7LT1XPYLQ2CxalR7y5I2xAH4JpO2WnlMeQWhsFseE8WX2FIR+gbjTMn4BgIMAbvG9xvYF7+KnPBqbxQVB7zNyoEcg7nY8tdzIc7/ksOHrEvSe5wnSLRBTyKLRI+jdzkPcKRDTtCsa/Z5T2RntyjblCYD9Fea7K+bzg9pj5qykdzxPEG05/Lfe85nTagATBU7aXy3jfVOvB39rniBbPYSyN8vr/MvSNABT+GTmonL4ZoQiL8FoCRTNrv/lAnha8gRpKsBAUdWUJ8iMBAIYLvISjAmJ/OgzxF5yYTmAcwD6ahCgj7XJQ6Ggx9NdAO5E+ndEmU9v2gAsCjnDCkE93zM6+Lwp1PwAb+lpeaUTzprD9dOqybseisn855yzAD5xneHX6Noo/nv8BZq0zmS5TXnIAAAAAElFTkSuQmCC"
                                            title="html"
                                            alt="html logo"></img>
                                        {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVElEQVR4nO2ZP0gcQRTGPyEWYkTPgMQ0wWBhLExSKTZnESLBwipWUeFIJIWSwkCQiIWCiCHNpVIQ1CoRRCGGKAnYSGKhNgEb74qAFv7BgAZB7/RkZZBluHm3t/vGG8x88Jrbt983v92d25k7wMrKyuq66R+AVI7rkAMkbgBIjAPklwEgPzlAZg0AmeEAGTUAZIQDZMAAkH4OkC4DQDo5QFoMAHnGAdJABKyDT/tETpgj4D4RsM0RACAPQJLIqeIIuUUEJMQggqo4w6NVypBxMdATIqSEIeMu4X/CdLEutMU8eTck/wdE7yYYtcYMsiz5h4neVU6QeWaQr5J/M9H7jRNkghlkUvJvJ3rHOUHea34Lvyb8hjlB3mQB0uPDv4/w6+YEacsCZNCH/wfCr5UTpDELkI8+/McIvyecII+YJ/tzyX+a6H3ICXKHGaRJ8v9B9JZzgtwAcKoI+i311ngAqZfOWVH0nQHIB7P2FGF/pL5KDyDOitqtmKJvFxq0rgj7m2YlOwfgOE3vsTgmLzR3rmC/c6lFRVhSsToNAYgAWBAVEZ+lk2p1vQgN+kw8KjcD+BYSvp+gQVEi8JXPfUmJOFflG9XAgd4ME9h5xJbEuqmM8AmJlcIXxTxKueqdDpCXWbwn3FC3xVbV6+BTrnqhA4TaM6Qy7OsTPs9t1gFS53MwQapWB8i9HIBU6AChviZ1VSE0ybkrHQCmABxoGPgRgO8A3gKoxhWpAMBjAEPEos9LxcXfBs7vu0UwQF7vVk6uepC79VS8mTdERcVnzjErKyur/1zni6RsTvF5fPgAAAAASUVORK5CYII="
                                            title="css"
                                            alt="css logo"></img> */}
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACfklEQVR4nO2avWsVQRDAfxrxW1NEg6A2FkErO8EinQSTSoMWIthotPRPMCaNMVWM5A+wCaRJ1DKgjZ2Y+FVYiZgYLMSPF0V8alYWJvA49+72dvdyH8nAwOO9m9n7vZubnZ1d2JD1IyeBGeCL6Ix8Vxk5DNwDVgBl0IfAEUosu4BB4GcMQKv+AsaAdkokm4FLwEcLgKh+Aq4DW4qGOAW8cACI6hvgfBEARyXWVWCdBY6vBUCHxPbvHCBW9a8kiwN5AGyVWP6aI0BUv0vy2BECYJPE7ts1BFARXQCuSlJxkhPAkwIBVESfAt1Zn8JowoRWpK4At21BrnkO9h4YB05LdtMT5TbgINADjADvPMe4YgPy2tH5ogzQZjGGvuaCB9BLG5Cmg+P7wB6yi7aZdBivaeM8q9M7PhlF3skxh3FTJeuT8IFohXlUFMhiQjh1AsPAvExsy8AcMATsN5T9kw5ZMlVsHV2OsT8HNBLs9CLrLLATuAH8cHzhU8U2xbbFQNj8s3+AJUcAFRJEzxOmcEp6EqE1VWyc9BrshgPclMrwWxCQLoPd8yqC7DbYLQcMD2Vxf0FATGm3UUWQLoPdfBVDq9dgN1RFkLsGOz1jf/OACRWWmUAWYnpR/dI8qMyEqICBGPv+lCbFZ+BMWUoUBXxIKBr3ATeBZ5KWG/J5UFpKpSoaFfAgYBn/uEiQ1brLd2E1nkdoNR2c6vbpXgcIbTOV11L3lePLtySNNJvOur7moiwHcms+DDg6b105TgB9wDGpy7YDh6RFNOoBoFIWdf/JSIkbdLdYby3T2jWxa7WtULuNntptvdVuM7R229O1OjBQuyMcaYdqpqt2qGZD8JB/H6S1rsPmGPQAAAAASUVORK5CYII="
                                            title="c/c++"
                                            alt="c++ logo"></img>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB+UlEQVR4nO2a7UrDMBSG3xtQ0fm1O9BN76As6BX4Q8vEj1uc29WoTBAFYf7buv2OBE6hhKZNsqRJ5144rFAa+nDOe05SBmz1f9QHMAGQAVgAGAPooWViBMClyOheK5QoIPJYAbhGyyF4G2AGAJYaEHksYy2zMwA/BiDRZWYA4IKuxe/MECaKzCTkiV8Al23NTCIZu5UwTGHsWaHMxEB8AHAI4AhACuAzpjJjNd2pCCPrIBYYptlinyrWGIZuAMxgTohSUuk4ZDdjhsOuU7HWaajWzAwhOBlbpecQc4ZZQHAytDB2mRofmswSIo8PMnaue2rJjcIkmrtYncjV+NBMHELIII3BsDXLSQfE+w6g7zgTVSAyjKx9AG8162aqbwATDxBVIJwyodKdxtovZQ9mAUBEOanU1Vh7XvbgIgBIxwfIOABIumZpjcoe7DVsdk7dSRjbxuwLAOeh228xxAvfUil1KRPvLqZ84tgvdSDcYiBe1UH4gHEJsjKBcFVmU2lOPNJG0na9ZYgd8JROgrJO6F6jEL4OVsMQELaecXFm57aecJmZnYp19kJkwhbmBmqloSFMYF4VE1vsrb5jgDCB+aIpvUuRxgbhawfgxdhNwwSFcAUTBcS6MFFB2MJECWEKEzWELkwrIDbqLxzFbwAjys6crpVn7K02TX94HuvTVJny6AAAAABJRU5ErkJggg=="
                                            title="git"
                                            alt="git logo"></img>
                                    </div>
                                    
                                    <p className="pixel">
                                        {typey}
                                    </p>
                                </div>
                                
                        </div>
                    </div>
                </div>
                </div>
                
            <div className="inline" id="link-box">
                <h2 className="pixel inline2">MY LINKS</h2>
                        <div className="box small-box">
                                <div className="inline" id="links">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAABRklEQVR4nO2YsUoDQRRFjwSCIAg2FmIl9oKWgn8g+AEaArr+gPgJ/kqEQLCQmCaV9SCCaCEIQRDsrAKCykhghGWYWRfUfc/NXLjN7t2Zw5vZ3eFB0hRqBmgDA8BU5AsgAxpl4LqAFXLPMUTVFoSzzq0iwIECwH4RoFEAaGoJ+OaWvwM8aQN8BzZzmTngShPgfSB3rAnwFVjxcueaAC3wDJwAR8BQ2x60FdvUDtAEcoe5+7423PVLYAdYdIeAJWAPuJEGXAMOCuZoAqeSgGU0C9xqBpxoVxJwNfe3eQC2ApkF4EMK0HhjvADzgdyjBOByZOm2A9lrCcD1CGD2g/n+5DtoPU+eSYBfShWMKe3BqXyLx4Feysgb0OR8FwEcBbLj3wCs2uZftz4yBYD7RYAN1wKTgjsr2yNsuVJX1cDsu8p9C5dUO30C+aNeFTppncIAAAAASUVORK5CYII="
                                        alt="linkedin logo"></img>
                                    <a className="pixel" 
                                        href='https://www.linkedin.com/in/emily-yu-761132260/'>my linkedin!</a>

                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nO2ZSWgVQRCGP2OCS3CJYoy7uCtiDi6o8aAIikvQi4oGvCiiRo2E6FXJQdxQg4LgUTx4cyPuHhVRD0bcsyDu4IJrTNTnSEMNPOfNm1czb2YSJD8UDNNT1fV3V1dX90AH/l8UAEuBfUAt8Bj4CLSKmOdH0ma+WQL0pp2gC1AGXAJ+A5ZPMToXgFViK3Z0AyqBVwGcTycvga1A17hILAAaQiTglHpgfpQEzNTXREjAKcdl5kNFf+BOjCQskVtAYVgkhst0W20kT8WHrNBP0qjVxtIAFAUl0bWNwsnyCLNAKfpoO3DecsjhICnWy+B2CbspwA7gWRbOmd1+G1As1cGBDN/P05LoptgnBruEoSH0A7gKVACzgNFAvsgYebcROAN8BTYDnR22ihWLXxVilYpRTLf75mlHy+PbAYr+zUB5oouy7Ah9o0pCkaL/F5lmpUwZ1+MiJFKi9GGll5FLSiPLIyRSrvThfDoDBT5K8eoIiRxT+vAL6OlmYKnSwGdZkFFhPPBT6Uupm4H9SmWT56PGSaUve92Ua5XK02Igskzpy1k35afKuMyNgchYJRFT0KbgvULRfBMHhiiJvHNTblUomm86xUBkoiMKPor8cfjT4qZsZ4rZUu+MAPoAA+XZljiIJCNXtoYC6dtUFYOSBjYFn6TxJnAXaJRQeiPPtqwgehz2iIrvScvAzFIKnkjjNUmxWyRPm4p1khw37VGJGjnS11BggmTKRVI575a7MPsIkIKL0rhLqsuDwCngOlAns/FBpnN1xLPRIqPdBDwAbgPngCNyFtrvVaZUKzOFkW8yU2FjncuC9pKdbkbm+jBgpBlYE1KomZJ8j08SRua4GeuuTMFOuSFryXnS0yBfBqMxQL8tXucie504xZxT1soGlM7wW+AEsEFGaiTQK8l2XznHmOvQKikvvgYgYImYkiotSj1SXomcwd8qw65KbihtFMq75iyct5JkYaa015RGsU7apwJfMpAwpNOhJAQy9eKLJyo8DJhcbpcQFyU07J84z4ErwOJMHQDrsyRSrr3duBckLn0gx6MPK4Pc9VOBzwQSLkYSIe4fGwKQSADT/XZ0JI2xT3KxNlgTpx4YFYBITZCO8qTu8tNRZ5/2/di+7PMC8B/09BnLfqG1+yCMP8DDgIdtSOS+nBhDQQ+pNOMmciWKf/F5UmInYiCSAA5FfdExWc4HURGpA2YQE3IlBTc4fvj7xeskfWNrU0zXTSnIkbLldFL54gelorswyz2pAx0gIvwFLXDNiM6zHVAAAAAASUVORK5CYII="
                                        alt="github logo"></img>
                                    <a className="pixel" 
                                        href="https://github.com/00eemsy">my github!</a>

                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABIElEQVR4nO2WMW7CQBBF3wE4AC1FQkONFNsox6CjSklDQ50iLcdIlRvkAlwAKXdIT4eYKJKLaCS8BssaL/lP2m521l9//q5B5IUNbN1M9IebhDiiHTA54vg3jhyAGTACNsB3rkJeXP02VyFLV79O1BctziwjhKxc/Wuivmpx5iJCyJurf891tI7AQ137BJxzFWL1bfXLrmcR1peQE/ABjOvaR+Az4crgwr4Hphf2zIGvXMI+Sex7zmm0LGDdTPSHm4Q4oh0wOeKIdsDkiKPLC9325S4iX/ayQ88q0avSaDUQHW5T2B1370hxZZ+mAGd1ay2u6FUpIw1EZ8J0azmiHbCh3Vp/0b8WPThyN6NlEoIcMY0W8Zkwhd0R7YDJEUEsP1ALr2Y1TsHVAAAAAElFTkSuQmCC"
                                        alt="resume icon"></img>
                                    <a className="pixel"
                                        href='https://docs.google.com/document/d/e/2PACX-1vTkf6XchfsodP2VVI5qQCyJRnw1qboDe8lPLzRxmTbbzppozi1EWaynhIJRJbyUPVqnplYX7vneSyvg/pub'>my (traditional) resume!</a>

                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAACT0lEQVR4nO3XTYiNcRTH8Y/ByMt4TcmgpLyVlFIWIoW8bERiY0PNQko2ZGeFhY1SFtRYjISyIGk0CyuaEknMwkaamDJ5r/Ey5tGjc+vO7d65z2VensU9dVb/c/7n23PO+f3vpW51q1tVa8m5S3LufuUAIqngKZvN+JQDmKTEv2JHYQ5XozsHUEl4dzD9tVZMxHw8yQHccyzCBFwsLEkHZmAa7o4hXEcZjorkow3XWqGTg4LeYk20/igGRgFsAKei5iq8KTkvuz07I2Ev+kYQ7gcORK0t+FwmpmxiPw5H4iZ8HAG4L9gWNQ7iZ4W4IS85jwasxOsRkJFx0d6hYqtedhOTMQ+PhwHuGRZgEtoyxGe69CHmYipu/wdcO6ZjFh5kzMl8+SssxXhc+Ae4yyFhi9FVQ15NRTpjJlM7nlGGBiJW5HbWWDNz4H3MQSPWRcF9VWSoL2JETmPc0T6cgOkXOBOtbY55TGXoSBRej94yeb1xJmL7I7c57jqdsQNVtWp3FNmAdyXn56JtC3EV78PbYlMbIqY4pwcb485dFcQ5E2A6yMuLnr1KQnov3s9Sa46zSj9Ej0XcMryoFfAWmjAlvky1NvThOk6G38D3DHnXQrqaQm+rAvaHsqetWRKimoywd2FF0R+40k4NGuqtEbgdH0YBLima9T1Fs95TCvg0BDR9G0/g9yjCJeHpRp+NDU8X7FEB8Eq8tTNxZwzAkhJPF2t2vNWXChuXbuvLHMAl4emP1rUFuP34lgOopIwyHKr1LR4Ll3vAlpx73epWN0PYHxjh9nN0fGBeAAAAAElFTkSuQmCC"
                                        alt="email icon"></img>
                                    <a className="pixel"
                                        href='mailto:eyu19415@gmail.com'>
                                            my email!
                                        </a>
                                </div>
                        </div>
            </div>

            <div className="grid">
                <div>

                </div>
                <footer className="pixel">
                    icon by <a href="https://icons8.com">Icons8</a>
                </footer>
            </div>
        </div>
    )
});

export default ElevatorPitch;
