/* eslint-disable react/no-unescaped-entities */
import './PageTemplate.css';
import { useEffect } from 'react';


function PageTemplate(props) {

  useEffect(() => {



});


  return (
    <>
    <main className="PageTemplatemain">
        <section className="PageTemplatesection">
            <div className="PageTemplatecontainer">
                <p className="PageTemplateContent">{props.text}</p>
                    </div>
            </section>
    </main>
    </>
  );
}

export default PageTemplate;
