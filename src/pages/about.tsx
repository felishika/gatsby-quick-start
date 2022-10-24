// Step 1: Import React
import Layout from '../components/layout'
import * as React from 'react'

// Step 2: Define your component
const AboutPage = () => {
    return (
        <main>
            <Layout pageTitle="About Me">
                <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            </Layout>
        </main>
    )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage