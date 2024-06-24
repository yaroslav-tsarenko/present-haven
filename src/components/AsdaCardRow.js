import AsdaCardContainers from "./AsdaCardContainers";
import FrameComponent6 from "./FrameComponent6";
import PropTypes from "prop-types";
import "./AsdaCardRow.css";

const AsdaCardRow = ({ className = "" }) => {
  return (
    <div className={`asda-card-row ${className}`}>
      <AsdaCardContainers
        container="/container-5@2x.png"
        prop="£10.00"
        prop1="£150.00"
        asda="Asda"
        asdaGiftCard="Asda Gift Card"
      />
      <AsdaCardContainers
        container="/container-6@2x.png"
        prop="£10.00"
        prop1="£250.00"
        asda="Ask Italian"
        asdaGiftCard="Ask Italian Gift Card"
        propWidth="155.8px"
        propWidth1="57.9px"
        propDisplay="unset"
        propMinWidth="unset"
        propWidth2="76.9px"
        propMinWidth1="76.9px"
      />
      <AsdaCardContainers
        container="/container-7@2x.png"
        prop="£20.00"
        prop1="£200.00"
        asda="Asos"
        asdaGiftCard="ASOS Gift Card"
        propWidth="159.9px"
        propWidth1="61.1px"
        propDisplay="unset"
        propMinWidth="unset"
        propWidth2="34.9px"
        propMinWidth1="34.9px"
      />
      <FrameComponent6
        link202220ALL20GIFT20CARD="/link--202220all20gift20cards20rectangle20brand20logos20bmpng@2x.png"
        prop="£20.00"
        prop1="£100.00"
        leisureVouchers="MyToolbox Card"
        altonTowersLeisureVoucher={`B&M (MyToolbox Card)`}
        propGap="24px"
        propAlignSelf="unset"
        propWidth="156.8px"
        propWidth1="61.1px"
        propDisplay="inline-block"
        propMinWidth="69.3px"
      />
    </div>
  );
};

AsdaCardRow.propTypes = {
  className: PropTypes.string,
};

export default AsdaCardRow;
