import React from 'react'
import styles from './ExpTable.module.css'

const ExpTable = () => {
  return (
    <section id='experience'>
        <div className="overflow-x-auto w-full max-w-4xl overflow-hidden">
          <table className="table-md table-zebra bg-neutral rounded-xl mx-auto">
            <thead>
              <tr>
                <th></th>
                <th>Tecnología</th>
                <th>Experiencia</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-t-2 border-t-black'>
                <th>1</th>
                <td>Python</td>
                <td><progress class="progress progress-primary w-56" value="70" max="100"></progress></td>
              </tr>
              <tr>
                <th>2</th>
                <td>Java</td>
                <td><progress class="progress progress-primary w-56" value="50" max="100"></progress></td>
              </tr>
              <tr>
                <th>3</th>
                <td>Kotlin</td>
                <td><progress class="progress progress-primary w-56" value="10" max="100"></progress></td>
              </tr>
              <tr>
                <th>4</th>
                <td>HTML</td>
                <td><progress class="progress progress-primary w-56" value="70" max="100"></progress></td>
              </tr>
              <tr>
                <th>5</th>
                <td>CSS</td>
                <td><progress class="progress progress-primary w-56" value="60" max="100"></progress></td>
              </tr>
              <tr>
                <th>6</th>
                <td>Javascript</td>
                <td><progress class="progress progress-primary w-56" value="70" max="100"></progress></td>
              </tr>
              <tr>
                <th>7</th>
                <td>Docker</td>
                <td><progress class="progress progress-primary w-56" value="40" max="100"></progress></td>
              </tr>
              <tr>
                <th>8</th>
                <td>MySQL</td>
                <td><progress class="progress progress-primary w-56" value="70" max="100"></progress></td>
              </tr>
              <tr>
                <td>9</td>
                <td>PostgreSQL</td>
                <td><progress class="progress progress-primary w-56" value="80" max="100"></progress></td>
              </tr>
              <tr>
                <td>10</td>
                <td>React</td>
                <td><progress class="progress progress-primary w-56" value="70" max="100"></progress></td>
              </tr>
              <tr>
                <td>11</td>
                <td>Next.js</td>
                <td><progress class="progress progress-primary w-56" value="50" max="100"></progress></td>
              </tr>
              <tr>
                <td>12</td>
                <td>Node.js</td>
                <td><progress class="progress progress-primary w-56" value="60" max="100"></progress></td>
              </tr>
              <tr>
                <td>13</td>
                <td>Git</td>
                <td><progress class="progress progress-primary w-56" value="80" max="100"></progress></td>
              </tr>
              <tr>
                <td>14</td>
                <td>Express.js</td>
                <td><progress class="progress progress-primary w-56" value="60" max="100"></progress></td>
              </tr>
              <tr>
                <td>15</td>
                <td>Vite.js</td>
                <td><progress class="progress progress-primary w-56" value="60" max="100"></progress></td>
              </tr>
              <tr>
                <td>16</td>
                <td>MongoDB</td>
                <td><progress class="progress progress-primary w-56" value="50" max="100"></progress></td>
              </tr>
              <tr>
                <td>17</td>
                <td>Tailwind CSS</td>
                <td><progress class="progress progress-primary w-56" value="80" max="100"></progress></td>
              </tr>
              <tr>
                <td>18</td>
                <td>DaisyUI</td>
                <td><progress class="progress progress-primary w-56" value="80" max="100"></progress></td>
              </tr>
            </tbody>
          </table>
        </div>
    </section>
  )
}

export default ExpTable