import ReactSlider from "react-slider";
import "./slider.css";

const Slider = (({onChange, currIndex}) => {
    (
        <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"

            marks
            markClassName="example-mark"
            onChange={onChange}
            min={0}
            man={4}
            defaultValue={0}
            value={currIndex}
            renderMark={(props) => {
                if (props.key < currIndex) {
                    props.className = "example-mark example-mark-completed";
                } else {
                    props.className = "example-mark example-mark-active";
                }

                return <span {...props}/>;
            }}
            >
        </ReactSlider>
    )
});

export default Slider;