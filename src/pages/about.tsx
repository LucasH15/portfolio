import * as React from 'react'
import { useIntl } from 'gatsby-plugin-react-intl'
import { Grid, Typography } from '@mui/material'

import { colors } from '../Theme'
import Layout from '../components/layout'
import Seo from '../components/seo'
import DirectionIcon from '../icons/DirectionIcon'
import DumbellIcon from '../icons/DumbellIcon'
import HeadphoneSupportIcon from '../icons/HeadphoneSupportIcon'
import PanIcon from '../icons/PanIcon'

const About: React.FC = () => {
    const intl = useIntl()

    return (
        <Layout>
            <Seo title={intl.formatMessage({ id: 'about' })} />
            <Typography variant="h1" color="primary.dark" textAlign="center">
                {intl.formatMessage({ id: 'about' })}
            </Typography>

            <p>
                Depuis que j'ai fait une formation de 6 mois à Ciney (en Belgique), en juin 2017, pour être développeur
                web, je n'arrête pas d'en apprendre encore plus sur ce métier et j'adore travailler là-dedans avec
                passion.
            </p>
            <p>
                Depuis février 2020, je travaille chez{' '}
                <a href="https://positivethinking.tech/" target="_blank" rel="noreferrer">
                    Positive Thinking Company
                </a>{' '}
                au Luxembourg où je suis consultant. C'est un système que j'adore, car j'ai voulu travailler dans
                l'informatique pour ne pas avoir un travail monotone, mais ce qui me dérangeait encore c'était le cadre
                de travail, l'environnement.
            </p>
            <p>
                Au début, j'étais content d'être dans une nouvelle entreprise et généralement au bout de 6 mois, voir 1
                an, je n'aimais plus trop être dans l'entreprise. Et grâce à Positive Thinking Company, j'ai des
                missions chez des clients qui ne vont généralement pas plus loin de 2 ans ce qui me permet d'intégrer
                d'autres entreprises, d'avoir d'autres collègues et de découvrir de nouveaux projets et méthodes de
                travail.
            </p>
            <p>
                Ce que j'aimerais faire dans les années à venir, c'est de continuer chez Positive Thinking Company et de
                réaliser des missions dans d'autres pays. Évoluer dans le domaine de l'UX/UI voir aussi sur du
                développement mobile.
            </p>

            <Typography variant="h4" component="h2" textAlign="center" color="primary.dark" sx={{ mt: 16, mb: 8 }}>
                Mais, à part le développement web, qu'est-ce que je fais ?
            </Typography>

            <Grid container spacing={12}>
                <Grid item xs={12} sm={6} lg={3} sx={{ textAlign: 'center' }}>
                    <DumbellIcon primarycolor={colors.secondary.main} sx={{ width: 48, height: 48 }} />
                    <p>
                        J'aime bien faire du sport, je fais de la musculation et du cardio 3 fois par semaine et je
                        compte commencer un sport d'équipe fin 2022.
                    </p>
                </Grid>

                <Grid item xs={12} sm={6} lg={3} sx={{ textAlign: 'center' }}>
                    <DirectionIcon primarycolor={colors.secondary.main} sx={{ width: 48, height: 48 }} />
                    <p>
                        Belgique, Luxembourg, France, Espagne, Italie, bref, j'adore voyager et le tour des USA est dans
                        ma liste.
                    </p>
                </Grid>

                <Grid item xs={12} sm={6} lg={3} sx={{ textAlign: 'center' }}>
                    <PanIcon primarycolor={colors.secondary.main} sx={{ width: 48, height: 48 }} />
                    <p>
                        Que cela soit des pâtisseries, des snacks, des entrées ou des plats principaux, j'adore cuisiner
                        et découvrir de nouvelles saveurs.
                    </p>
                </Grid>

                <Grid item xs={12} sm={6} lg={3} sx={{ textAlign: 'center' }}>
                    <HeadphoneSupportIcon primarycolor={colors.secondary.main} sx={{ width: 48, height: 48 }} />
                    <p>
                        J'aide des débutants dans leur parcours sur{' '}
                        <a href="https://openclassrooms.com/fr/" target="_blank" rel="noreferrer">
                            OpenClassrooms
                        </a>{' '}
                        pour devenir développeur et valider leurs compétences.
                    </p>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default About
