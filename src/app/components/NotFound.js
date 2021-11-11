import React, { useEffect } from 'react';

import { onChangeBackgroundTheme } from 'helpers/animators';
import PageNotFound from 'assets/images/pagenotfound.svg';

const NotFound = () => {
  useEffect(() => {
    document.title = '404 Page Not Found | Anush kumar N';
    onChangeBackgroundTheme('main');
  }, []);

  return (
    <div className="page-not-found">
      <img src={PageNotFound} alt="page not found" />
    </div>
  );
};

export default NotFound;
