import React from 'react';

import { Header, Left, Projects, About, Rotate } from './components/index';

function App() {
   const [visible, setVisible] = React.useState();

   const onClickProjects = () => {
      setVisible('Projects');
   };
   const onClickAbout = () => {
      setVisible('About');
   };
   const onClickClose = () => {
      setVisible(undefined);
   };

   // установлен three , удалить если не нужен

   return (
      <>
         <Rotate />
         <Header />
         <div className="container">
            <Left
               toggleProjects={visible === 'Projects' ? onClickClose : onClickProjects}
               toggleAbout={visible === 'About' ? onClickClose : onClickAbout}
            />

            <div className="right">
               <h1>o̶̪̳̠̔̄̄̊̿̈́̋͘͠p̵̢̙̺̜͍͆e̴̩͈͇̘̾̆͊̊̏͌n̸̟͙̗͈̞̾̌́͜e̶̢̧̿̋͐̌̀d̶̡̳̙̊̅̇̆̆̂͝ ̶̢̧̩̳̞͚̆͝f̶̺̱̱̀ȋ̵̲̲̐̀̀̎̕͘͜͠͝l̶̳̘̀̅͒̇̀̈́͐e̵̢̖̲͊ͅ</h1>
               {visible === 'Projects' ? (
                  <Projects onClose={onClickClose} />
               ) : visible === 'About' ? (
                  <About onClose={onClickClose} />
               ) : (
                  <></>
               )}
            </div>
         </div>
      </>
   );
}

export default App;
