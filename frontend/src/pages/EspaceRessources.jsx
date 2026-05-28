// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/Historique.css';
// import '../styles/PageHero.css';

// const ressources = [
//     {
//         categorie: 'Guides et brochures',
//         items: [
//             { titre: 'Guide du patient – La Fée Rima', description: 'Tout ce que vous devez savoir avant votre première visite.' },
//             { titre: 'Brochure "Comprendre la psychiatrie adolescente"', description: 'Un document accessible pour les familles.' },
//             { titre: "Livret d'accueil", description: "Présentation de l'établissement et de son fonctionnement." },
//         ],
//     },
//     {
//         categorie: 'Liens utiles',
//         items: [
//             { titre: 'Santé Mentale France', description: 'Association nationale de sensibilisation à la santé mentale.', lien: '#' },
//             { titre: 'Psycom', description: 'Ressources sur la santé mentale pour le grand public.', lien: '#' },
//             { titre: 'HAS – Haute Autorité de Santé', description: 'Recommandations et bonnes pratiques en psychiatrie.', lien: '#' },
//         ],
//     },
// ];

// export default function EspaceRessources() {
//     return (
//         <div className="historique-page">
//             <Navbar />

//             <section
//                 className="page-hero"
//                 style={{ backgroundImage: "url('/assets/feerima/hero5.png')" }}
//             >
//                 <div className="page-hero-content">
//                     <h1>Espace Ressources</h1>
//                     <p>Documents, guides et liens utiles pour vous accompagner</p>
//                 </div>
//             </section>

//             <main className="historique-main">
//                 <section className="hist-section section-1" style={{ flexDirection: 'column', alignItems: 'center' }}>
//                     <div className="hist-content" style={{ maxWidth: '900px', width: '100%' }}>
//                         <h2 style={{ marginBottom: '2rem' }}>NOS RESSOURCES EN LIGNE</h2>
//                         {ressources.map((cat, ci) => (
//                             <div key={ci} style={{ marginBottom: '2.5rem' }}>
//                                 <h3
//                                     style={{
//                                         color: '#7cb518',
//                                         borderBottom: '2px solid #7cb518',
//                                         paddingBottom: '0.5rem',
//                                         marginBottom: '1.25rem',
//                                         fontSize: '1.1rem',
//                                         letterSpacing: '0.05em',
//                                         textTransform: 'uppercase',
//                                     }}
//                                 >
//                                     {cat.categorie}
//                                 </h3>
//                                 <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
//                                     {cat.items.map((item, ii) => (
//                                         <div
//                                             key={ii}
//                                             style={{
//                                                 background: '#fff',
//                                                 borderRadius: '10px',
//                                                 padding: '1.25rem',
//                                                 boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
//                                                 borderLeft: '4px solid #7cb518',
//                                                 display: 'flex',
//                                                 flexDirection: 'column',
//                                                 gap: '0.5rem',
//                                             }}
//                                         >
//                                             <strong style={{ color: '#1a3a5c' }}>{item.titre}</strong>
//                                             <p style={{ fontSize: '0.9rem', color: '#555', margin: 0 }}>{item.description}</p>
//                                             {item.lien && (
//                                                 <a
//                                                     href={item.lien}
//                                                     style={{ color: '#7cb518', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none' }}
//                                                 >
//                                                     Accéder →
//                                                 </a>
//                                             )}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </section>
//             </main>

//             <Footer />
//         </div>
//     );
// }

// premiere modification

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

const ressources = [
    {
        categorie: 'Guides et brochures',
        items: [
            { titre: 'Guide du patient – La Fée Rima', description: 'Tout ce que vous devez savoir avant votre première visite.' },
            { titre: 'Brochure "Comprendre la psychiatrie adolescente"', description: 'Un document accessible pour les familles.' },
            { titre: "Livret d'accueil", description: "Présentation de l'établissement et de son fonctionnement." },
        ],
    },
    {
        categorie: 'Liens utiles',
        items: [
            { titre: 'Santé Mentale France', description: 'Association nationale de sensibilisation à la santé mentale.', lien: '#' },
            { titre: 'Psycom', description: 'Ressources sur la santé mentale pour le grand public.', lien: '#' },
            { titre: 'HAS – Haute Autorité de Santé', description: 'Recommandations et bonnes pratiques en psychiatrie.', lien: '#' },
        ],
    },
];

export default function EspaceRessources() {
    return (
        <div className="historique-page">
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMVFRUXFxcXGBgVFxUXFxcWFRUXFxUVFRcYHSggGBolHRYVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OFxAQGysgHx03LS03Ly0rLS0rKy03LSsvLS0rLy04LSstLy0uKzctKy0tLSstLSstNystLTctKy0rLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIFBAYHAwj/xAA5EAABAwIDBQYDCAIDAQEAAAABAAIDBBEFITEGEkFRYRMicYGR8DJCoQcUI1KxwdHhM4JicvHCQ//EABgBAQEBAQEAAAAAAAAAAAAAAAADAgEE/8QAKBEBAQACAQQCAQIHAAAAAAAAAAECEQMhMUFREmFxE/AUIjKBkcHR/9oADAMBAAIRAxEAPwDsiEIXWQhCEAhNCAQhCAQhCAQhCAQhCAQk5wGZNh1WBU4s1vw94/Rctk7uyWrBYtRiDG8bnkP5VPPWPfqbDkMgvFpCneT0pOP2zp8Re7Tujpr6rF+pSXtDC46BY3a3qRADmvWKMnQLKhowNc1kgLUw9s3P0xo6PmvdrANFMIstySMW2hNARZdcMJIuhA0IQEAkhO6BJKW6hB7ITQtMhCEIBCEIBCEIBCEIBCxqmuYzU58hmVV1GLuOTe6PUrNzkamNq5mna3NxAVXU41wYPM/wqp5Ljcm/ipNapXkt7KzjnlKSd783G6i1pXpGzPLMrNjoidcljVrW5FcxZkFG465BWEUDW6BepVJx+2Ln6eMVK0dV7ITCpJpPYKEIQCaSEDCAgIKACEXRZAJgJaJoAIuhF0BdCV0IMhCELTIQhCAQhQlla0XcQB1R1NBKp6rHWjKMXPM6eiq56l783OPhoPRTvJI3OO1eVWLsbp3j009VVVGJvfxsOQy+qw90JgqVztUmEgISAWRBRvfwsOZVjT4Y1ubu8fouTC125SK2GJzsmhWEOHfmPkFnNFtFIKswkTudQjjDRkLKaSa2wEXQEBA0FJCBhCEWQIJhMJAIBSuooQMhFkJIGUFBQUAhCZCBhySjdC6MlCFgVeLxMyvvHk3P6pbJ3cktZ68KmtZH8Th4cfRa7VY3I/JvdHTX1WDYnUqWXLPCk4va2qsecco22HM6qte9zjd5ueuai2wXpG0uNmglSuVvdWYyIg8gptv5+qz4cMJ+I26BZ8NO1ugt14rU47WbnIrIMOc7M5Drr6KxgoWN4XPMrIQqzCRO5WgppXTWmQmhCBJlIJoBAKOKaBIQ1NABCEwUCKLoCSBoQgIHdAUCFIFdAEJXTQNIaI/dDBZcEgUKIahBq1XiMkmrsuQyH9rFa3zUrrMgw97+FhzOXpxK8vXKvT0jE95LIgpnP+EHx4eqtafDGN17x66eizgOSpOL2neT0rabCQM3m/QaKxYwNGQAHRSCFWYydk7bQgITXXAgJJoC6kFFCBphJVkeJOE5icwBtyA65vfUXHI+PELsm2cs5jrflYyyBoLjkBn6LX5Kqad1o7hvJptlzc7h71Wfj7z2YAPxOt9Cf4Xrg0W7EDbN2Zt5gfQfUrckk2hncs+T9OXU71gHZ9xzdI2/i8n1QcJqGf45CegeT9H5K+Oi8p6hrBd7mtHU2HkufOtfw+M7Wz+6ljxeaM2lbveW463gcj9FbUddHJ8B8WnIjxCrMSrntdaWNskJ+HLVv5mvvr6LwqKEECWncSBwv32c/Ecx+q18ZfpKcuWNs/qk/wAtjsmqnC8T3zuPI3uBGjv7VqVOzT1Y5TKbgam5Ip24LjQST80EIDVJB1TCACQPMJkZoDkCum9PXJRGfiglf3dCgT1Qg0ivrJIWGWKPtCwglvEtB727zNuC2XA8XiqomyxOBBHoeS18yeq1Grnlwqo+8xAmlld+KwaMefmHIH9fFQ48tdFs8d9XXgiyw8JxKOoibLE7ea7PLh4rMCuiEBBSBQNCAhA0ggJhAkwUBY2IyubG5zAC4WOeYA4mw1suxy3U3VM9xp6lzjvbrjc5usWuJsbHK4OXkVk45B8MzTyB8R8B/byChTzipZ2b90SC5YeByz9eI8+C8qGr7MmCZu6093P5Ty8L5g8MlX79PDdWfHfTLrL9+mVWy9rTh/FpBcBw+U68O8D5L1wCa7Nzi0n0JJ/c+ir2n7vI4OF2OycBo5hBAeB4ZH+lGQPppA4Xc06E6OadfPTz6FPj00Tk1nM7+L9E+WWWRwa5+8C6zQ62TeQGp6L1oqjtx2M3xfI7rnkR6rwbLvTtkjB7zwbHUXtvacPizWRjkW5KHty3s/8AYEb3/wAnzK7qdk5llq5W7m9X1r6ecEvYl0MwvGc7a7tzk5vG36eoUp6d9M4SRneYSOORH5XdeRH8hWtZTCeIHLe3btPiNL8j/BWBgdQM4ZM2m9gdRY95vSxzH9Lm+m1bhrKY7/F/1XpT0cUzmzMcWZ3cwAZO1Od8r+HHJXBVNh9BJFMbZx53JtYjVp/7cFc29++Kxn3ejgn8tutXyaYCVvfvwQ33wWFhrn79Uzbjf+PHolb378Uwdc/1QHhqgnjZK2nn5JgoC6PFIe7oBt799UB/Psp65jXp/CAPf7pcECeLlC9Aep+iEHOcBxASNs42eMiFY1tOyVjo5GhzXAgg8itEpqktcHtPeH1HJblhmINlaCDnx59V5bNPTGh4Xik2DVZjdd1O83HVl/iH/IcR58c+1YZiEc8bZYnBzXC9wtG2owZtXCYzk4Zsefldw62OhWh7F7Uy4bOYpgez3t2Rh+U/mb04quGaeeLvwTCx6GsZKxr43BzXC4IXuFVI0IKEAOiEIQAUmk3SSCCkxPCbd+LTWzbhzCPmZbh06ctMV1W2YBsxDJBk2Q/A4flfyv75LZlhVmGMkztuuOpAyP8A2bx8RY+KpM/bycnBZv4dr4/4jQUNow2bck3Sd35rA8ATr/5yWe8AgggFp1BFx6Fa63DaiH/E4kf8CHNP+jsx5KRxOpbk5jT4se36XzS429nceXDGayln5n72vYYGNN2Na024DP14aKk2ina4tAObb31Obt3LLwUDUVMuQaW/9GEer3HT0WfheE9nZzzcjQXuAeZPE5fuuyfG7rOd/Vnw4509+GbSxFrWgnNrWjzAz9+C8HYcO2Eu9pnu24kWJ3r6cbW581mhUu1G08FCxjp94l5IYGAkndALic7AC/1U916bhjZJfC7OfvmsSTEYmvbGZGCR2jN4bxPJrb3Koa7aVlRh9RNQvD5GxOIAH4jCBmdy17gXIFs7LUPs1pcNfGKioc19W15eTNIe4Wu/De0E2fluu3jc3vyXG2VWfaBU1T3R0MccLWC75ql7GdmL2Jc1x7uYto45/Ctv2Mx1lRFuCobUSxWEr2MLGEuJsWggd2wtfjY6cOd7Y4fT4hUvkw0drUR2fNGAezmaHNBkjfcAuBLQ4AjeGYzBvluoqmOIuq6mLDaeOz/u9IG9r8Vrlrb94lzBdznZnNq6OsEZpGyq8DxyOpGQdG+/+OQtElhaziwEkA9Vargdkh76iyRy5/10TBvxQM/vmFG6kbqLgEErZ6JEe7/RI6efv9Ezz8vFAnEe7oUu18PRCD55oqu9ld4fWmNwe3/Ycxz8VpkMpabq9pKnJQyx0tjdulUtS17Q9pvdan9oOznbs7eIXlYMwB8bBw6kaheeFYiYXA/IdehPFbnTu3xduh8/qsdq33cx+zzbV1G/s5CTA45/8DzHRd6p52yND2EOaRcEcb6Lg32hbMCF33mEfhuPfA+Rx+bwP6rJ+zbbc0zxBM68LjYH8hP7K+OSWWLunv36IKhDKHAOaQQcwQpkLaYTKimgaRCZSKAR7/ZIJlAr5e/fFT3yOJUQtF2u26kgqPudPBvzHcs6UhjLyC7bbxAcOF7gXBF7hBvMs4aC57gAMyScgBqbnTRa/R7a0U04poJg+Z29uANduOIaTYPtY6FaayZ1bHLh9TiMT6mch0TYWOdHGYryOjfI0APBDdBe26Td2iqZ6WqoGmJ+IUNM5jLhsLN6Z4tlvubAH3PMldHuMfq6qolirK4Yb2QzYIye8NW33hvW7p+LvBwIB1WLDUT1+HVjZXGcUbmTRTEOBIAe2Vt7XP4V3gHP4b6qwo8ElxWh+9TuZFURuLWTyDdZPA0A3ksPlJcA8DgR4bU/auKnoYTAYKh3aR0lod2ODt3Nu7Md2NlgT4WQaTs3s3V1Y++0T4KRzRu9xz29pLHYOJaA5rA7I2sBf5c7q9mwmgG598p2y1zmOkfFQdqWuG867yxncuQLkgAXvra696rFMQZUQwRxQxyxsdM2Cnew09TDcCSPNrTHK3UHIHMcr41JsO6odMOxkooAd+AS7r3Mke688bWMfc07hnukixIt81wMJx2lZO2OCWLD6IxslB3O/VatkBmee6WEOYTckEG3TE2cwSoL3mnY2qppN7cnmbG1k0ZLmkVhlaZZN0gWbHZpsHXXRsN2dpYN4RxgNcQS1xc+MOF+9HG8lsZNzfd6clai3Hpn9FwavgOxcNNN95uC8BzWsjihhiY1994ARtDpOQc46dVtAt78Pf1S+v6p+/fogAfZPsIICRI4ZdEeygd+GqNfd0nXHS39J34/zwQJpuOZRnoj3ml4a5IAoUjbqPJCD5fK9qafdNuC8kiEs27LpsdNPcLYMBxUxuEbj3DoTw6LRqKpsbFXcUoIsvPlPC0rolVAyRha/vNcLEHQ36cVxrarAHUk27mY3ZsceX5T1C6Ts7i3/wCcmvynmFZY/g7KqF0bxqMj+V3AhcxunbNtW+zLbkxEU1Q67Dkxx4Hg0/t7v2Zrri4NxwXyxiNC+CV0Ugs5vHmODguofZjt1pS1LujHHj0PVXxqWUdXugIbmOafBaYARdJpTt79+CAKAi6LckBkff1WvbbbKR18O6bNmYCYpDwJ1Y62rHWF+Wo0z2IJBBxzDsGr6eEsmfTYXELtknPZ9vNnl3muLnDPQOYFY1GJ0kL4YWww1j2sY4VlWGyOlYXEgQbjHPmc0lzQACRu2JyJW17Z7NPqQyemeI6uC/ZOcGlrg74mODgQOYdbIrEw7YCJrQ2WSZ7B+I2MlrXwyv8A825URBjix17FtgMgciAujWMclq9+USH762feZHAx9S09i5zS2PsY4d2GVg3bmR+XI8dgw7YeTtgah+9SgOaYJJ5Kjtmkfh77XNayEsNnXYCQRkeK2/DMNhp2dlTxshZqWsFgXaFzuLnZDM3OSy0FXg+zlLSFxp4GsLhYuu97yPy78ji7dyGV7aK16JD9k7FcARcZa/qh2nvLRAyRxQCbuY8Clbkn7P7/AKoIk5J2uOFx/PBRt16qRzQGnDJJtk7oJ98EA4Zf176ov/CYvw4KN7++SA3en1Qi3ihB8xIVljeGOheRbK6rV0IhZ1FVcDqsJR8FnLHbWN02iKS/HPUHkVuOzuKdoN157w95LnVDVXVxTzkd5ps4afwvPYtK2PbfZptTFvMAErLlvXmD0XIO8x1jdrmnwIIXb8IxMStyyIyN9SeS1Hb/AGXveohb3gO80cRz8V3G+HMp5bH9mm3HagU9Qe+PhP5hzXSrr5Sp53NcHNJDgbgjUFdz+zrbQVTBFIQJWgDx6jorSpWN6uk3omTmktMmSi+eaAUOKAAQCi6SAsgcimUOGiBHMD6pocEc0AiyOCEDBRb/ANSBQOSBhNpzUTqn1QBHJSUS5NwQDR7/AEUToi6bxxF/BAA5o480OsohBO55ISCaDRdtNnQ8EgLkVbSmNxaV9M11KHtIXKdt9m9XNGa045qkpyMLSQdQorjpNcQbhXOH1N1TKUMpab8FPPHy3jl4bfRVZjcHt8xzW70VWJo7jjqFzakqLq4wrEDE4EHuk94fuFGxWVR7ebMdg8zRD8N2bgPlPPwWsUFa+J7ZI3brmm4P7Hou6vYyeIjItcLLju1ezz6SUi34bj3Ty6LeN2zZp2nYTa1lZEA42kbkQdbrbCvl7BcUkp5WyxmxGo4EcivoLZLaOOsiDge9xHEHiCqyp2abAUOHVDQo8F1lO6QQEBBEjLPNSaUgmEA3jfVDeaVkIGB5hF80XQTmgSaRTKAJRbO6bUt3VAOQTkhvrZBPRA2+CVkBIoJBJqBqkDzQRI6hCdkIM9VmMYeJGnJWaCFplwjbLZ8scXNC01fQ+0eECRpyXFdpsGMLyQMlx2KJIhNCOvWln3TbgrylmutdIWXRVNjYqWeOuqmOXhuuB4oYnbp+E6dFsWMYYyqhLXC9xkf4WhQy3Wy7PYtukRvOR+EqV6KOXYvhr6eUxvHgeYWbsxjz6SUSMJ3fmHMcx1XUtrdnWVUROW8BdpC4zV0z4nljxYg+yqS7YsfS2z+NR1MQkYQbhWgXztsVtQ+jlFz+GTmOXULv2HV7Jow9hBBF8lSXadmmXZNIouuuApBSISKAJTJSugtQCZSQUBdJNGqAapA3UAglA72Uj+qXBFzbNAiOKHIdogIEpOUW5oaSgYJQgFCDOQkhaZQqB3SuZ7bsFjkPRJCDlLxmUkIXGgopoXL2dndc0ishp5oQvOs37DzeNl+S5x9psYEjSAL87BJC5h3dy7NMauw/Y/ITFYk2BOVyhCtj3Sy7OlhTPFCFthFCSEEnJDRCEAEcUIQM6KIQhAHVAQhAnKfBCEEeBUotEIQQOqbEIQJCEI6//9k=')" }}
            >
                <div className="page-hero-content">
                    <h1>Espace Ressources</h1>
                    <p>Documents, guides et liens utiles pour vous accompagner</p>
                </div>
            </section>

            <main className="historique-main">
                <section className="hist-section">
                    <div className="hist-content">
                        <h2>NOS RESSOURCES EN LIGNE</h2>
                        
                        {ressources.map((cat, ci) => (
                            <div key={ci}>
                                <h3>{cat.categorie}</h3>
                                
                                <div className="ressources-grid">
                                    {cat.items.map((item, ii) => (
                                        <div key={ii} className="ressource-card">
                                            <strong>{item.titre}</strong>
                                            <p>{item.description}</p>
                                            {item.lien && (
                                                <a href={item.lien} className="ressource-link">
                                                    Accéder <span>→</span>
                                                </a>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}