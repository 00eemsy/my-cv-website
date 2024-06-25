import "../../fonts.css";
import "./elevatorPitch.css";
import Typewriter from "typewriter-effect";

const ElevatorPitch = (() => {
    return (
        <div className="elevatorPitch">
            <h1>
                <span className="cursive">E</span> <span className="pixel">LEVATOR PITCH</span>
            </h1>

            <h2 className="pixel" id="MAAG">ME AT A GLANCE</h2>
                <ul className="pixel">
                    <li>aspiring webdev (or as i like to say it, a maker of tiny virtual universes)... </li>
                    <li>... with a solid foundation in object oriented programming!</li>
                    <li>currently a junior studying computer science @ reed college (located in portland, or)</li>
                    <li>proud to be a first-generation, taiwanese-american woman in tech!!! 👩🏻‍💻🇹🇼</li>
                        <ul>
                            <li>tangent: i actually got into coding because creating (which i LOVE) digital things was more cost-effective than physical things. it's an immigrant child thing.</li>
                        </ul>
                    <li>now the fun stuff: i'm a san franciscan-- born and raised 🌁! i also ADORE kitties 🐈‍⬛ and will kick your butt at mahjong and/or poker 🀄</li>
                    <li>nice to meet you! 🫶</li>
                </ul>

            <h2 className="pixel">MY TECH STACK</h2>
                <p className="pixel">*hint: hover over the icons for text descriptions!*</p>
                <div className="inline">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACAUlEQVR4nO2av0scQRTHP3hqqtMjnAmEBH9A2iDiH6CFkGAXtUkag0LEyiYQiNU1WonYaCE2VnoHUfEPEGxMY+F/IEmUJAoX7rhCTSYsTGR57Lor3t7M4nzgNbP3hvd933vLHHPgcDhuSwdQAqqAsiyqurZ8HCElCwpWEbEZR4iNTigRlThCVEoiEtMFKidEYLrTyjkiMN1p5RwRmO60co4ITHdaOUcEpjutnCMC051WzhGB6U4rGx2Js/dn4JX+id0MPAGGga20CPkDvIuoZUJ/zmohC3GKAeZsFvIXeCaeTQHrwAyQ0WtPgV2bhfwQ64MibwWYBn7bPiPfxfpAHfY2IuQSaBPPZoFa2oQo/UaSPAYKwFmahPwEekJqyAIfgXIahHjxSw96GM+BozQI+f8q3gb6Qup5CBynQYg/9oChgLz3JoVc3WHvgsjraoSQmn51Lot17+vg50HAsI8BxYA9yyK3NWkhO0C3zvNOrvO6wHNgXOzbKe43vNOuRw44FPvui9xHSQt5TXze+vJGAtyaBJaAD3rA/YwmLeTE58hNNAFffHmnAYfGMFoCHEtkRr4BvREiFgPyvgIvImrJhsxQIkK8uABW9eEvp7vodfwNcBCRtwa81MeTDNAO9AOfdJNUI4WYiPtzGVq0oFBVj+vpvBZTsdSJjbh/GHA4HFzzDyHa7x0cR+5hAAAAAElFTkSuQmCC"
                        title="javascript">
                        </img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACH0lEQVR4nO3aT0sbQRjH8a8YiwrRHoq1f3xTkoOeijWtfQ0F8VwS/7wALR7al5C0UEGsYqElBMGKUOlFjEK0GCt6c2ThEUrcdTObTZ9Z2R88xw3zyczuzs4MpLm/6QNywAKwCfwG/gBXwDGwC3wE8kAWB/MAmAHqgGmxGsA0kMGRDAHfLQDNte5C72RkCJk26zPQpQmZjAFxU2OakK9NjSkBz6XKlpAvmpCzpsZ4gJuMWEJOFB2YGCFeqaW5IWUBePUpyRDTZqWQtEcsozq0eoA3MoVodOB+CIKYgGrIe2vKZn72BKj+p8a3CjH/VAUYDkP0AzsKCBuIAbblsyEws0oIW4gBCkGIh8B5giB/gUE/SF4REQVigJd+kOUEQpb8IFuKiJoME2NZ3tP1VmqKkIIsXBjLOvCDXCr1RBF4CvyKcP1FnJB9+TejLCIMyLVRECYIUouIeAbMA4cKPXoQ182eE4RRqqof5H2EH8oq9YSRWoxreQdFhAEm/CBZn5URlyFn8rDwTTFBkHeETON/JgCyHTaNRz5aKg5DfgCPaTHe5+RrYA04dQByKm15BXTTodgMQ6djYi61pBAS3iOlkH2UxEDCth/UchIjpKHHgBVLyF37KKuakPEYn1wvNCFdspnZLsJbpO7YW7vVeNPpjTYQ34BHOJIeOZZhsw1xBLyVa51LVpZfP8hBmrocrPEO2OzJnsscMAr0ajc2DR3KNd642oFqa6WvAAAAAElFTkSuQmCC"
                        title="python"></img>
                    <img src="data:image/png;base64,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"
                        title="react"></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC5UlEQVR4nO1aTYiNURh+/GVqlBmlsFGku/E3yYKYjYVZUPJTKDaKjcJiLCgNFpSRZDX+iklkpZAxRFn4icUINRQJ05iIWYya4XL01rvQ17nve875vnPvSfPUu7nfeZ+fe8893/nOvcAo0sc6ACMATKI1AmCtS5ADCZg1SpFHFTsSMGqU2u4SZE0CRo1S5FHF0gSMGqWWuASZnYBRo9QslyCTEjBqlKqHI4YSMGsqFHlzxrsEDJsK9dYnyCOBiK41Rq6Hir4zrglEbxAfrwV98uaM0wLRIOJjUNDv8CE6rMzTungZUKdoH/Ih26mQzbT0NBT0/ZiraJM3Z2xQyBZbegaqtGqt9wnSrJCtsvS8qFKQZp8gJYVsm6XnbpWClHyCNCpk+yw9l6oUpMEnyBgAwwLZSUvPiSqEGGZvXvgoEF5BPFwWdD+EED4TCO8jHu4Juk9DCG8KhK8QDy8F3RshhOcFwq+Ihy+CLnnyxhGB8A+AOfyklqfGZTTHA/gt6B4NCbKnCqtQds82XRm/OyTI5sghvls0Fyo9m0KCrIgcpNeiuVLpIU/e0HahPwB8y9RPjyAPLJpblJ55IUGmKqR7LT1XPYLQ2CxalR7y5I2xAH4JpO2WnlMeQWhsFseE8WX2FIR+gbjTMn4BgIMAbvG9xvYF7+KnPBqbxQVB7zNyoEcg7nY8tdzIc7/ksOHrEvSe5wnSLRBTyKLRI+jdzkPcKRDTtCsa/Z5T2RntyjblCYD9Fea7K+bzg9pj5qykdzxPEG05/Lfe85nTagATBU7aXy3jfVOvB39rniBbPYSyN8vr/MvSNABT+GTmonL4ZoQiL8FoCRTNrv/lAnha8gRpKsBAUdWUJ8iMBAIYLvISjAmJ/OgzxF5yYTmAcwD6ahCgj7XJQ6Ggx9NdAO5E+ndEmU9v2gAsCjnDCkE93zM6+Lwp1PwAb+lpeaUTzprD9dOqybseisn855yzAD5xneHX6Noo/nv8BZq0zmS5TXnIAAAAAElFTkSuQmCC"
                        title="html"></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVElEQVR4nO2ZP0gcQRTGPyEWYkTPgMQ0wWBhLExSKTZnESLBwipWUeFIJIWSwkCQiIWCiCHNpVIQ1CoRRCGGKAnYSGKhNgEb74qAFv7BgAZB7/RkZZBluHm3t/vGG8x88Jrbt983v92d25k7wMrKyuq66R+AVI7rkAMkbgBIjAPklwEgPzlAZg0AmeEAGTUAZIQDZMAAkH4OkC4DQDo5QFoMAHnGAdJABKyDT/tETpgj4D4RsM0RACAPQJLIqeIIuUUEJMQggqo4w6NVypBxMdATIqSEIeMu4X/CdLEutMU8eTck/wdE7yYYtcYMsiz5h4neVU6QeWaQr5J/M9H7jRNkghlkUvJvJ3rHOUHea34Lvyb8hjlB3mQB0uPDv4/w6+YEacsCZNCH/wfCr5UTpDELkI8+/McIvyecII+YJ/tzyX+a6H3ICXKHGaRJ8v9B9JZzgtwAcKoI+i311ngAqZfOWVH0nQHIB7P2FGF/pL5KDyDOitqtmKJvFxq0rgj7m2YlOwfgOE3vsTgmLzR3rmC/c6lFRVhSsToNAYgAWBAVEZ+lk2p1vQgN+kw8KjcD+BYSvp+gQVEi8JXPfUmJOFflG9XAgd4ME9h5xJbEuqmM8AmJlcIXxTxKueqdDpCXWbwn3FC3xVbV6+BTrnqhA4TaM6Qy7OsTPs9t1gFS53MwQapWB8i9HIBU6AChviZ1VSE0ybkrHQCmABxoGPgRgO8A3gKoxhWpAMBjAEPEos9LxcXfBs7vu0UwQF7vVk6uepC79VS8mTdERcVnzjErKyur/1zni6RsTvF5fPgAAAAASUVORK5CYII="
                        title="css"></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACfklEQVR4nO2avWsVQRDAfxrxW1NEg6A2FkErO8EinQSTSoMWIthotPRPMCaNMVWM5A+wCaRJ1DKgjZ2Y+FVYiZgYLMSPF0V8alYWJvA49+72dvdyH8nAwOO9m9n7vZubnZ1d2JD1IyeBGeCL6Ix8Vxk5DNwDVgBl0IfAEUosu4BB4GcMQKv+AsaAdkokm4FLwEcLgKh+Aq4DW4qGOAW8cACI6hvgfBEARyXWVWCdBY6vBUCHxPbvHCBW9a8kiwN5AGyVWP6aI0BUv0vy2BECYJPE7ts1BFARXQCuSlJxkhPAkwIBVESfAt1Zn8JowoRWpK4At21BrnkO9h4YB05LdtMT5TbgINADjADvPMe4YgPy2tH5ogzQZjGGvuaCB9BLG5Cmg+P7wB6yi7aZdBivaeM8q9M7PhlF3skxh3FTJeuT8IFohXlUFMhiQjh1AsPAvExsy8AcMATsN5T9kw5ZMlVsHV2OsT8HNBLs9CLrLLATuAH8cHzhU8U2xbbFQNj8s3+AJUcAFRJEzxOmcEp6EqE1VWyc9BrshgPclMrwWxCQLoPd8yqC7DbYLQcMD2Vxf0FATGm3UUWQLoPdfBVDq9dgN1RFkLsGOz1jf/OACRWWmUAWYnpR/dI8qMyEqICBGPv+lCbFZ+BMWUoUBXxIKBr3ATeBZ5KWG/J5UFpKpSoaFfAgYBn/uEiQ1brLd2E1nkdoNR2c6vbpXgcIbTOV11L3lePLtySNNJvOur7moiwHcms+DDg6b105TgB9wDGpy7YDh6RFNOoBoFIWdf/JSIkbdLdYby3T2jWxa7WtULuNntptvdVuM7R229O1OjBQuyMcaYdqpqt2qGZD8JB/H6S1rsPmGPQAAAAASUVORK5CYII="
                        title="c/c++"></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB+UlEQVR4nO2a7UrDMBSG3xtQ0fm1O9BN76As6BX4Q8vEj1uc29WoTBAFYf7buv2OBE6hhKZNsqRJ5144rFAa+nDOe05SBmz1f9QHMAGQAVgAGAPooWViBMClyOheK5QoIPJYAbhGyyF4G2AGAJYaEHksYy2zMwA/BiDRZWYA4IKuxe/MECaKzCTkiV8Al23NTCIZu5UwTGHsWaHMxEB8AHAI4AhACuAzpjJjNd2pCCPrIBYYptlinyrWGIZuAMxgTohSUuk4ZDdjhsOuU7HWaajWzAwhOBlbpecQc4ZZQHAytDB2mRofmswSIo8PMnaue2rJjcIkmrtYncjV+NBMHELIII3BsDXLSQfE+w6g7zgTVSAyjKx9AG8162aqbwATDxBVIJwyodKdxtovZQ9mAUBEOanU1Vh7XvbgIgBIxwfIOABIumZpjcoe7DVsdk7dSRjbxuwLAOeh228xxAvfUil1KRPvLqZ84tgvdSDcYiBe1UH4gHEJsjKBcFVmU2lOPNJG0na9ZYgd8JROgrJO6F6jEL4OVsMQELaecXFm57aecJmZnYp19kJkwhbmBmqloSFMYF4VE1vsrb5jgDCB+aIpvUuRxgbhawfgxdhNwwSFcAUTBcS6MFFB2MJECWEKEzWELkwrIDbqLxzFbwAjys6crpVn7K02TX94HuvTVJny6AAAAABJRU5ErkJggg=="
                        title="git"></img>
                    <p className="pixel">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('... plus node.js, express.js, socket.io, mips assembly, and more!');
                                typewriter.start()
                            }}>
                        </Typewriter>
                    </p>
                </div>

            <h2 className="pixel">MY LINKS</h2>
                <div className="inline" id="links">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAABRklEQVR4nO2YsUoDQRRFjwSCIAg2FmIl9oKWgn8g+AEaArr+gPgJ/kqEQLCQmCaV9SCCaCEIQRDsrAKCykhghGWYWRfUfc/NXLjN7t2Zw5vZ3eFB0hRqBmgDA8BU5AsgAxpl4LqAFXLPMUTVFoSzzq0iwIECwH4RoFEAaGoJ+OaWvwM8aQN8BzZzmTngShPgfSB3rAnwFVjxcueaAC3wDJwAR8BQ2x60FdvUDtAEcoe5+7423PVLYAdYdIeAJWAPuJEGXAMOCuZoAqeSgGU0C9xqBpxoVxJwNfe3eQC2ApkF4EMK0HhjvADzgdyjBOByZOm2A9lrCcD1CGD2g/n+5DtoPU+eSYBfShWMKe3BqXyLx4Feysgb0OR8FwEcBbLj3wCs2uZftz4yBYD7RYAN1wKTgjsr2yNsuVJX1cDsu8p9C5dUO30C+aNeFTppncIAAAAASUVORK5CYII="></img>
                    <a className="pixel" 
                        href='https://www.linkedin.com/in/emily-yu-761132260/'>my linkedin!</a>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nO2ZSWgVQRCGP2OCS3CJYoy7uCtiDi6o8aAIikvQi4oGvCiiRo2E6FXJQdxQg4LgUTx4cyPuHhVRD0bcsyDu4IJrTNTnSEMNPOfNm1czb2YSJD8UDNNT1fV3V1dX90AH/l8UAEuBfUAt8Bj4CLSKmOdH0ma+WQL0pp2gC1AGXAJ+A5ZPMToXgFViK3Z0AyqBVwGcTycvga1A17hILAAaQiTglHpgfpQEzNTXREjAKcdl5kNFf+BOjCQskVtAYVgkhst0W20kT8WHrNBP0qjVxtIAFAUl0bWNwsnyCLNAKfpoO3DecsjhICnWy+B2CbspwA7gWRbOmd1+G1As1cGBDN/P05LoptgnBruEoSH0A7gKVACzgNFAvsgYebcROAN8BTYDnR22ihWLXxVilYpRTLf75mlHy+PbAYr+zUB5oouy7Ah9o0pCkaL/F5lmpUwZ1+MiJFKi9GGll5FLSiPLIyRSrvThfDoDBT5K8eoIiRxT+vAL6OlmYKnSwGdZkFFhPPBT6Uupm4H9SmWT56PGSaUve92Ua5XK02Igskzpy1k35afKuMyNgchYJRFT0KbgvULRfBMHhiiJvHNTblUomm86xUBkoiMKPor8cfjT4qZsZ4rZUu+MAPoAA+XZljiIJCNXtoYC6dtUFYOSBjYFn6TxJnAXaJRQeiPPtqwgehz2iIrvScvAzFIKnkjjNUmxWyRPm4p1khw37VGJGjnS11BggmTKRVI575a7MPsIkIKL0rhLqsuDwCngOlAns/FBpnN1xLPRIqPdBDwAbgPngCNyFtrvVaZUKzOFkW8yU2FjncuC9pKdbkbm+jBgpBlYE1KomZJ8j08SRua4GeuuTMFOuSFryXnS0yBfBqMxQL8tXucie504xZxT1soGlM7wW+AEsEFGaiTQK8l2XznHmOvQKikvvgYgYImYkiotSj1SXomcwd8qw65KbihtFMq75iyct5JkYaa015RGsU7apwJfMpAwpNOhJAQy9eKLJyo8DJhcbpcQFyU07J84z4ErwOJMHQDrsyRSrr3duBckLn0gx6MPK4Pc9VOBzwQSLkYSIe4fGwKQSADT/XZ0JI2xT3KxNlgTpx4YFYBITZCO8qTu8tNRZ5/2/di+7PMC8B/09BnLfqG1+yCMP8DDgIdtSOS+nBhDQQ+pNOMmciWKf/F5UmInYiCSAA5FfdExWc4HURGpA2YQE3IlBTc4fvj7xeskfWNrU0zXTSnIkbLldFL54gelorswyz2pAx0gIvwFLXDNiM6zHVAAAAAASUVORK5CYII="></img>
                    <a className="pixel" 
                        href="https://github.com/00eemsy">my github!</a>
                </div>

                <div className="inline">
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