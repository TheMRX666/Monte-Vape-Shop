import React from 'react'
import styles from '../assets/styles/AboutPage.module.scss'

function AboutPage() {
  return (
    <div className={styles.AboutPage}>
      <h2 className={styles.AboutPage__text}>
        <span 
          style={{
             fontSize: '28px'
          }}
        >
          Monte Vape Shop - taste satisfaction 
        </span><br/><br/>
        Smoking is not just a harmful habit but also a cause of a range of serious health issues.
        Don't want to or can't quit? Wondering what to replace regular cigarettes with?
        Decided to keep up with the times? Choose a stylish and practical alternative.
        The online store Vape Shop Monte offers a huge selection of electronic cigarettes.
        Vapes contain nicotine but no tobacco, making them much safer.
        And most importantly, you can enjoy any flavor. In our catalog,
        you will definitely find your favorite flavors. Choose!<br/><br/>
        Life is flying by. Today more than ever, people are prone to stress:
        events in the country and the world, career races, relationships with family and friends,
        routine - all these processes are exhausting. Sometimes you want to take a break,
        forget about worries, relieve tension. Smoking greatly helps, helping to relax.
        Inhale-exhale, to tackle familiar tasks with renewed vigor. <br/><br/>
        It's great that you found our vape shop. Our assortment has absolutely everything for vapers:
        <br/>
        <div
          style={{
            margin: '20px 20px 20px 20px'
          }}
        >
          POD systems; <br/>
          disposables; <br/>
          vapes; <br />
          organic liquid; <br/>
          nicotine salt liquid; <br/>
          accessories. <br/>
        </div>
        Forget about roadside shops where dubious products are sold for a pittance.
        Don't risk your health to save money. We guarantee quality!
      </h2>

      <h2 className={styles.AboutPage__text} style={{marginTop: '50px'}}>
        <span
          style={{
            fontSize: '32px'
          }}
        >
          How are electronic cigarettes different from regular ones
        </span><br/><br/>
        Vape, electronic cigarette, or electronic nicotine delivery system - these
        are the names of our product. The products consist of a mouthpiece, a heater,
        and a capsule with liquid. When heated, it produces vapor with nicotine and/or flavor,
        depending on the cigarette you choose. There are disposable and reusable models,
        some with zero nicotine content.<br/><br/>

        Do you need arguments in favor of vapes? We'll be happy to dispel any doubts.
        If tobacco burns, harmful gases, carcinogens, and toxins are released.
        Quite a cocktail! Unlike traditional tobacco products, e-cigarettes cannot
        cause irreversible harm to health. On the contrary, switching from classics
        to electronic analogs will improve your well-being.<br/><br/>

        What problems do smokers face? Teeth darken, skin and hair condition worsen,
        and the first symptoms of a range of complex diseases are observed over time.
        They smell bad, which often repels those around them. But if you choose
        electronic cigarettes, you can avoid problems. Minimize the negative effects
        of smoking, enjoy yourself. Those who choose vapes find it easier to breathe! <br/><br/>

        Shopping at our Vape Shop is much more profitable than sponsoring sellers
        of regular cigarettes. After all, you don't have to throw away the gadget
        after each use. And loved ones are happy too: there's no persistent tobacco smell.
        You inhale pleasant vapor, not acrid smoke. People around you don't have to inhale
        anything, they don't become passive smokers. Ultimately, quitting smoking is
        much easier for those who switch to e-cigarettes.
      </h2>
    </div>
  )
}

export default AboutPage