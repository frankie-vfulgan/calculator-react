function Calculator(){
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 zero">0</div>
                </div>

                <div className="row">
                    <div className="col-md-3 hi">AC</div>
                    <div className="col-md-3 hi">+/-</div>
                    <div className="col-md-3 hi">%</div>
                    <div className="col-md-3 orange">÷</div>
                </div>

                <div className="row">
                    <div className="col-md-3 hi">7</div>
                    <div className="col-md-3 hi">8</div>
                    <div className="col-md-3 hi">9</div>
                    <div className="col-md-3 orange">×</div>
                </div>

                <div className="row">
                    <div className="col-md-3 hi">4</div>
                    <div className="col-md-3 hi">5</div>
                    <div className="col-md-3 hi">6</div>
                    <div className="col-md-3 orange">-</div>
                </div>

                <div className="row">
                    <div className="col-md-3 hi">1</div>
                    <div className="col-md-3 hi">2</div>
                    <div className="col-md-3 hi">3</div>
                    <div className="col-md-3 orange">+</div>
                </div>

                <div className="row">
                    <div className="col-md-6 hi">0</div>
                    <div className="col-md-3 hi">.</div>
                    <div className="col-md-3 orange">=</div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;