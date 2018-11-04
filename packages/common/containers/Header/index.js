import { connect } from "react-redux";
import Header from "@components/organisms/Header";

const mapStateToProps = ({ count }) => {
    return { count };
};

const mapDispatchToProps = dispatch => {
    return { increment: () => dispatch({ type: `INCREMENT` }) };
};

const HeaderConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderConnect;
