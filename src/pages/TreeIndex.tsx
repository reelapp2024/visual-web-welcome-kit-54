
import React from 'react';
import TreeHeader from '../themes/tree/components/TreeHeader';
import TreeHero from '../themes/tree/components/TreeHero';
import TreeAboutUs from '../themes/tree/components/TreeAboutUs';
import TreeServices from '../themes/tree/components/TreeServices';
import TreeProcess from '../themes/tree/components/TreeProcess';
import TreeWhyChooseUs from '../themes/tree/components/TreeWhyChooseUs';
import TreeTestimonials from '../themes/tree/components/TreeTestimonials';
import TreeServiceAreas from '../themes/tree/components/TreeServiceAreas';
import TreeFAQ from '../themes/tree/components/TreeFAQ';
import TreeFooter from '../themes/tree/components/TreeFooter';

const TreeIndex = () => {
  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-forest-50 to-nature-50">
      <TreeHeader />
      <TreeHero />
      <TreeAboutUs />
      <TreeServices />
      <TreeProcess />
      <TreeWhyChooseUs />
      <TreeTestimonials />
      <TreeServiceAreas />
      <TreeFAQ />
      <TreeFooter />
    </div>
  );
};

export default TreeIndex;
