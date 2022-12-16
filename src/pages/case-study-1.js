import * as React from "react"
import { Link } from "gatsby"

import "../components/layout.css"
import Layout from "../components/layout"
import ScrollToTop from "../components/ScrollToTop"
import Seo from "../components/seo"

import macbookImage1 from '../images/macBookPro1.png'
import usersTable from '../images/usersTable.png'
import cs1FeaturesChart from '../images/cs1FeaturesChart.png'
import iconPersona from '../images/icon-persona.png'
import cs1WelcomeToKTS from '../images/cs1WelcomeToKTS.png'
import cs1DesignChanges from '../images/cs1DesignChanges.png'
import cs1DesignSystemColors from '../images/cs1DesignSystemColors.png'
import cs1DesignSystemStyles from '../images/cs1DesignSystemStyles.png'
import cs1DesignSystemComponents from '../images/cs1DesignSystemComponents.png'
import cs1FinalDesign from '../images/cs1FinalDesign.png'
import cs1ProductSuccess from '../images/cs1ProductSuccess.png'

const CaseStudyOne = () => (
  <Layout>
    <div  style={styles.row}>
      <div style={styles.column}>
        <h2 className="color-primary-dark">PROJECT OVERVIEW</h2>
        <h3>CLIENT</h3>
        <p>Success in Education, Keys to Success Team</p>
        <h3>PROJECT</h3>
        <p>Admin Application Dashboard/ UI Refresh</p>
        <h3>SCOPE</h3>
        <p>Create a single screen that has quick access to the most-used features throughout the app. Using the design system, create unique experiences for each feature that automatically update upon login.</p>
        <h3>ROLE</h3>
        <p>Lead Experience Designer</p>
        <h3>COLLABORATIONS</h3>
        <p>Development Team, Project Manager, Account Director from Hoverstate, Program Manager from Keys to Success team</p>
      </div>
      <div style={styles.column}>
        <img style={styles.portrait} src={macbookImage1} />
      </div>
    </div>
    <hr/>
    <div  style={styles.row}>
      <div style={styles.column}>
        <img style={styles.portrait} src={usersTable} />
      </div>
      <div style={styles.column}>
        <h2 className="color-primary-dark">PROBLEM</h2>
        <p>Keys to Success is an education-based app that helps high school students and adults navigate their way towards higher education. On the app users can discover career options, track progress in classes they are currently enrolled in, learn new skills, and even apply for scholarships all while earning points to spend on gift cards to local restaurants. </p>
        <p>The Keys to Success admin users of the application had an admin login/tool that was operating like a website instead of a control panel. When a user logged into the application, the first screen they would see is the Users screen. While this is a screen that is used often, there were better uses for such key real estate of the first screen a user sees. The admin users realized there were some features that users chose most often, but some of those features were buried within the application.</p>
      </div>
    </div>
    <hr/>
    <div  style={styles.row}>
      <div style={styles.column}>
        <h2 className="color-primary-dark">SOLUTION</h2>
        <p>Turn the first screen seen on application into a control center with a dashboard. Include a quick access version of the requested and most-used features on the dashboard. Move the navigation from the top to a sidebar on the left that expanded and collapsed. Create a design system and updated the overall UI of the application while using the new navigation and dashboard as a starting point.</p>
      </div>
      <div style={styles.column}>
        <img style={styles.portrait} src={cs1FeaturesChart} />
      </div>
    </div>
    <hr/>
    <div  style={styles.row}>
        <div  style={styles.row}>
            <div style={styles.column}>
                <h2 className="color-primary-dark">PROCESS</h2>
            </div>
        </div>
      <div style={styles.column}>
        <h3 className="color-primary-dark">PHASE 1</h3>
        <p>When I started on the project, the application had outdated UI and was functioning like a typical website instead of a place where adminstrative tasks are handeled. While talk of updating the UI was in the works, it wasn’t in the budget for the year. Because of this, I created a homepage on their current app that included widgets for their most-used features at the time. I worked with the program manager and other employees on the KTS team to figure out what features on the app were used the most and could have a “snapshot” version displayed on this new screen. The page continued the style that the application currently had. These widgets gave an overview of the feature and would take them to the original page with the full details when clicked on. The homepage was adjusted for users with less access than the main super admin users by removing the features they didn’t have access to.</p>
      </div>
      <div style={styles.column}>
      <h3 className="color-primary-dark">PHASE 2</h3>
      <p>The next year, the client was convinced that a UI refresh was desparately needed. I was able to take what I had made on the dashboard I had created previously and use it as a starting point for what was now going to be their dashboard screen. This would be the first screen they saw when they logged in. I also switched the navigation from the top to a panel on the left that expanded and collapsed to have more screen space available. Along with these changes came the overall UI update for the entire application. To start this I created a simple design system including font styles, buttons styles, form styles and other componenets based on their current brand guidelines. This design system was implemented to the new naviIgation and dashboard first, then the rest of the application after that. </p>
      </div>
    </div>
    <hr/>
    <div  style={styles.row}>
        <div  style={styles.row}>
            <div style={styles.column}>
                <h2 className="color-primary-dark">PERSONAS</h2>
            </div>
        </div>
      <div style={styles.column}>
        <img style={styles.icon} src={iconPersona}/>
        <h3 className="color-primary-dark">PERSONA 1</h3>
        <h4>Keys to Success Super Admin User</h4>
        <p>A type of admin for the Keys to Success student mobile app. User has access to ALL admin features. They approve actions taken by users of the student app and actions of other admin users with limited access. There are &lt;10 users with this type of access. </p>
      </div>
      <div style={styles.column}>
        <img style={styles.icon} src={iconPersona}/>
        <h3 className="color-primary-dark">PERSONA 2</h3>
        <h4>District Admins</h4>
        <p>A type of admin for the Keys to Success student mobile app. They have access to limited features that are chosen by the super admin based on what they know these users use the app for. They need to get certain actions approved by a super admin user. User mostly uses the app for gathering data about their school district and adding scholarships, internships and other opportunities to the student app.  </p>    
      </div>
      <div style={styles.column}>
        <img style={styles.icon} src={iconPersona}/>
        <h3 className="color-primary-dark">PERSONA 3</h3>
        <h4>School Admins</h4>
        <p>A type of admin for the Keys to Success student mobile app. Users have access to limited features that are chosen by the super admin based on what they know these users use the app for. They need to get certain actions approved by a super admin user. User mostly uses the app for gathering data about their specific school.</p>
      </div>
    </div>
    <hr/>
    <div  style={styles.row}>
      <div style={styles.column}>
        <h2 className="color-primary-dark">ROUND 1 MOCKUPS</h2>
        <p>The first version of this dashboard was the homepage using the old design of the app. While desigining this, I knew there was so much potential to make this dashboard feature incredibly useful while also looking current. I kept ideas I had for this screen for a potential UI make-over that I hoped was in the near future. I even built a version that had a slightly updated design to encourage them to do the UI updates. While the client loved what could be done in the future with the updated version, they were still very excited for this “homepage” feature to be implemented on the current app because it was going to be a huge time saver for them.</p>
        <p>This dashboard includes a way to see if any announcements are currently live on the admin app (and quick access to add one), stastics on how many approvals are needed, information about the current Master Key feature, alerts, numbers for scholarship applications, quick links, and quick exports.</p>
      </div>
      <div style={styles.column}>
        <img style={styles.portrait} src={cs1WelcomeToKTS} />
      </div>
    </div>
    <hr/>
    <div  style={styles.row}>
      <div style={styles.column}>
        <img style={styles.portrait} src={cs1DesignChanges} />
      </div>
      <div style={styles.column}>
        <h2 className="color-primary-dark">DESIGN CHANGES</h2>
        <p>When the budget for the app UI refresh was approved, I had a great starting point with my original design. Some time passed since I made that version, so I started doing research on the most current dashboard experiences and styles. While a lot of the UX was remaining the same, I had the chance to start totally from scratch (while still keeping branding colors and fonts) with the UI. Along with the overall UI update, I moved the navigation from lining the top to a sidebar menu on the left that identifies sections by icons and has subsections shown in a popout when clicked on. This allowed more screen space to be used throughout all of the app. </p>
      </div>
    </div>
    <hr/>
    <div  style={styles.row}>
        <div  style={styles.row}>
            <div style={styles.column}>
                <h2 className="color-primary-dark">DESIGN SYSTEM</h2>
                <p>I created a simple design system that included colors, typography, button styles, form fields, checkboxes, radio buttons, toggles, and some icons. The brand already had a color palete and font selected, so I applied those into the system. I was first focused on the homepage-turned-dashboard first, but I kept in mind the rest of the app as I created the system. I had worked on the app for a long enough time that I knew what would and wouldn’t work within a system. And the rest of the app was also getting the facelift, but none of the UX would be changing at this time.</p>
            </div>
        </div>
        <div  style={styles.row}>
            <div style={styles.column}>
                <img style={styles.portrait} src={cs1DesignSystemColors}/>
            </div>
            <div style={styles.column}>
                <img style={styles.portrait} src={cs1DesignSystemStyles}/>
            </div>
            <div style={styles.column}>
                <img style={styles.portrait} src={cs1DesignSystemComponents}/>
            </div>
        </div>
    </div>
    <hr/>
    <div  style={styles.row}>
        <div  style={styles.row}>
            <div style={styles.column}>
                <h2 className="color-primary-dark">FINAL DESIGN</h2>
                <p>The final design enhanced the experience of what had already been created and had a very impactful update to the UI. The new look and feel has a much brighter presence which encourages a more positive attitude when users log into the app. I was able to correct some flaws I found in my original design, mainly condensing sections by adding a scroll and using the brand colors to give each feature on the screen their individual identifiers. One of my favorite updates was changing the tab design that was present in mutliple feature sections on the dashboard. I placed them all on one line with a highlight bar below the selected item. This not only saved space, but was also used throughout the rest of the app on internal pages. </p>
            </div>
        </div>
        <div  style={styles.row}>
            <div style={styles.column}>
                <img style={styles.portrait} src={cs1FinalDesign}/>
            </div>
        </div>
    </div>
    <hr/>
    <div  style={styles.row}>
      <div style={styles.column}>
        <h2 className="color-primary-dark">PRODUCT SUCCESSES</h2>
        <p>The client was so excited for the dashboard feature to exist on the old version of the app. It achieved their goal of having a one-stop place where they could get a quick overview of some of their most-used features. The final version with the new UI blew them away. The dashboard that showcased the new design system got them excited for the rest of the application to get the UI makeover and solidified their decision that they made the right choice to move forward with this project. As the new internal screens were presented to the client, they were inspired to add even more features to the app to make the experience better for them as the “super admins” and the other users of the application.</p>
      </div>
      <div style={styles.column}>
        <img style={styles.portrait} src={cs1ProductSuccess} />
      </div>
    </div>
    <hr/>
    <div  style={styles.row}>
      <div style={styles.column}>
        <h2 className="color-primary-dark">WHAT I LEARNED</h2>
        <p>Having the opportunity to create a solution to the problem and then, later, make it EVER BETTER was a great learning opportunity. The two designs showcase how much I improved as a designer in the eight months between both of these projects. Getting the chance to take a long step back and then re-address the problems gave me even more insight than I would have gotten on another type of project. Looking back, I think that I could have made the original version of the dashboard have more specific and interesting UI, but part of my tactic was to show how it could be so much better if they went through with the UI redo, so it worked out in the end. I also learned how much branding affects how I design. It was less challengeing the second time around when the overall look and feel of the site was more modern and less restrictive. </p>
      </div>
    </div>
    <ScrollToTop showBelow={250} />
  </Layout>
)

const styles = {
    row: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
    },
    column: {
      padding: ` 0 var(--space-5)`,
      display: 'flex',
      flexDirection: 'column',
      flexBasis: '100%',
      flex: 1,
    },
   textContainer: {
    display: 'flex',
    flexDirection: 'column',
   },
   portrait: {
    maxWidth: '100%',
   },
   icon: {
    maxWidth: '42px',
   }
   
  }

export const Head = () => <Seo title="Case Study 1" />

export default CaseStudyOne
