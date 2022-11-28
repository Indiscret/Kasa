import "../../styles/Banner.css";
import { useLocation } from "react-router-dom";
import BannerHomeD from "../../assets/Banner_Home_Desktop.png"
import BannerAboutD from "../../assets/Banner_About_Desktop.png"

function Banner() {

    const { pathname } = useLocation();

    return (
        <div className="Banner">
            <div className="Banner_bg_dark"></div>
            <img
                src={
                    pathname === "/about"
                        ? BannerAboutD
                        : BannerHomeD
                }
                alt="paysage"
                className="Banner_img"
            />
            {pathname === "/" && (
                <div className="Banner_title">Chez vous, partout et ailleurs</div>
            )}
        </div>
    );
};

export default Banner;