import React from 'react';
import headshot from '../../imgs/headshot2.png'

export default function About() {
  return (
    <div class='base'>
      <div class='artBox'>
        <h1 class='loud'>Full</h1>
        <h1 class='loud'>Stack</h1>
        <h1 class='loud'>Developer</h1>
        <img src={headshot} class='selfie' alt='headshot'></img>
      </div>
      <div class="div1">
        <h1>About Me</h1>
        <h3 class='name2'>My name is Ian Burley.</h3>
      <p>
        I’m a seasoned web developer and a proud family man passionate about the confluence of technology and life's adventures. With my wife, two delightful daughters, and our exuberant golden-doodle, Jake, we're on a continuous quest for fresh experiences.
      </p>
      <p>
        My journey in tech began in 2015 as a self-taught enthusiast, relying on platforms like Treehouse and invaluable insights from fellow developers. But as the world shifted with the onset of Covid-19, I pivoted from the fitness industry, transforming my coding hobby into a profession.
      </p>
      <h4>
        In 2023 I graduated from University of California's Full Stack Web Development Program.
      </h4>
      <p>
        This experience, combined with my fervor for innovation, has allowed me to collaborate with myriad skilled developers. I'm excited by the endless possibilities of creating, iterating, and evolving digital solutions. Let's embark on a tech odyssey together!
      </p>
      </div>
    </div>
  );
}
