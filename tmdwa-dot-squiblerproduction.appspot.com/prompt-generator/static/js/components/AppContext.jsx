import React from 'react';

export const AppContext = React.createContext({
  won: false,
  lost: false,
  danger: false,
  limit: 5,
  progres: 0,
  type: "minutes",
  hardcore: false
});

export const PromptContext = React.createContext({
   selectedPromptId: 0,
   promptContent: "--- text ---",
   changePromptContent: () => {}
 });

export function withAppContext(Component, data = {}) {
   return class extends React.Component {
      render() {
         return (
            <AppContext.Consumer>
               {context => (
                  <Component {...context} {...data} />
               )}
            </AppContext.Consumer>
         )
      }
   }
}
