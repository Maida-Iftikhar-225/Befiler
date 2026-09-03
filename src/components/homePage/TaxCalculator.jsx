import React, { useState } from "react";

const TaxCalculator = () => {
  const [monthlySalary, setMonthlySalary] = useState(0);
  const [taxYear, setTaxYear] = useState("2026 - 2027");
  const calculateTax = (annualSalary) => {
    if (annualSalary <= 600000) {
      return 0;
    }
    if (annualSalary <= 1200000) {
      return (annualSalary - 600000) * 0.01;
    }
    if (annualSalary <= 2200000) {
      return 6000 + (annualSalary - 1200000) * 0.11;
    }

    if (annualSalary <= 3200000) {
      return 116000 + (annualSalary - 2200000) * 0.2;
    }

    if (annualSalary <= 4100000) {
      return 316000 + (annualSalary - 3200000) * 0.25;
    }

    return 541000 + (annualSalary - 4100000) * 0.29;
  };

  const annualSalary = monthlySalary * 12;

  const annualTax = calculateTax(annualSalary);

  const monthlyTax = annualTax / 12;

  const salaryAfterTax = monthlySalary - monthlyTax;

  const formatNumber = (number) => {
    return Math.round(number).toLocaleString("en-PK");
  };
  const handleSalaryChange = (e) => {
    const value = Number(e.target.value);
    setMonthlySalary(value);
  };

  return (
    <section className="bg-white px-4 py-10 font-sans sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div
          className="
            rounded-[28px]
            bg-[#ffe2e6]
            px-6
            py-8 
            
            lg:px-12
            lg:py-12
          "
        >
          <div
            className="
              grid
              grid-cols-1 
              items-center 
              gap-8
              lg:grid-cols-[0.8fr_2fr]
              md:grid-cols-[0.7fr_2.1fr]

             "
          >
            <div>
              <h2
                className="
                  md:max-w-xs items-center md:text-left text-center max-w-4xl
                  text-2xl
                  font-bold
                  leading-tight
                  text-slate-900
                  lg:text-4xl

                "
              >
                Calculate Your Taxes
              </h2>

              <p
                className="
                  mt- md:max-w-xs items-center md:text-left text-center max-w-4xl
                  lg:text-base text-[12px]
                  leading-relaxed
                  text-slate-500
                 
                "
              >
                Estimate your tax liability or refund in seconds with our smart
                calculator.
              </p>
            </div>

            <div
              className="
                rounded-2xl
                bg-white
                p-6
                shadow-sm
                sm:p-7
                lg:p-6
              "
            >
              <div
                className="
                  grid
                  grid-cols-1
                  gap-6
                  md:grid-cols-[1fr_1fr_170px]
                  sm:grid-cols-[1.5fr_130px]
                "
              >
                <div className="md:col-span-2">
                  <div
                    className="
                      grid
                      grid-cols-1
                      gap-2
                      sm:grid-cols-2
                    "
                  >
                    <div>
                      <label
                        className="
                          mb-2
                          block
                          lg:text-xs text-[10px]
                          font-semibold
                          text-slate-400
                        "
                      >
                        Monthly Salary (PKR)
                      </label>

                      <div
                        className="
                          flex
                          h-11
                          items-center
                          rounded-lg
                          border
                          border-gray-200
                          bg-gray-50
                          px-3
                        "
                      >
                        <span
                          className="
                            mr-2
                            text-xs lg:text-sm 
                            font-semibold
                            text-slate-400
                          "
                        >
                          Rs.
                        </span>

                        <input
                          type="number"
                          value={monthlySalary}
                          onChange={handleSalaryChange}
                          min="0"
                          className="
                            w-full
                            bg-transparent
                            lg:text-sm text-[11px]
                            font-semibold
                            text-slate-800
                            outline-none
                          "
                        />
                      </div>
                    </div>

                    {/* TAX YEAR */}

                    <div>
                      <label
                        className="
                          mb-2
                          block
                         lg:text-xs text-[10px]
                          font-semibold
                          text-slate-400
                        "
                      >
                        Tax Year
                      </label>

                      <select
                        value={taxYear}
                        onChange={(e) => setTaxYear(e.target.value)}
                        className="
                          h-11
                          w-full
                          rounded-lg
                          border
                          border-gray-200
                          bg-gray-50
                          px-3
                          lg:text-sm text-[11px]
                          font-semibold
                          text-slate-700
                          outline-none
                        "
                      >
                        <option>2026 - 2027</option>

                        <option>2025 - 2026</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <input
                      type="range"
                      min="0"
                      max="1000000"
                      step="1000"
                      value={monthlySalary}
                      onChange={(e) => setMonthlySalary(Number(e.target.value))}
                      className="
                        h-1 
                        w-full
                        cursor-pointer
                        accent-red-500 
                        
                      "
                    />

                    <div
                      className="
                        mt-2
                        flex
                        justify-between
                        text-[10px]
                        font-semibold
                        text-slate-400
                      "
                    >
                      <span>Rs. 0</span>

                      <span>Rs. 1,000,000+</span>
                    </div>
                  </div>

                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <span
                      className="
                        lg:text-sm text-xs 
                        font-semibold
                        text-slate-400
                      "
                    >
                      Annual Salary
                    </span>

                    <span
                      className="
                        lg:text-sm text-xs 
                        font-bold
                        text-slate-400
                      "
                    >
                      Rs.{" "}
                      <span className="text-slate-800">
                        {" "}
                        {formatNumber(annualSalary)}{" "}
                      </span>
                    </span>
                  </div>
                </div>

                <div
                  className="
                    border-t
                    border-gray-200
                    pt-5
                    sm:border-l
                    sm:border-t-0
                    sm:pl-3
                    sm:pt-0
                  "
                >
                  <div>
                    <p
                      className="
                        text-xs
                        font-semibold
                        text-slate-400
                      "
                    >
                      Monthly Tax
                    </p>

                    <p
                      className="
                        mt-1
                        text-lg
                        font-bold
                        text-slate-800
                      "
                    >
                      Rs. {formatNumber(monthlyTax)}
                    </p>
                  </div>

                  <div className="mt-5">
                    <p
                      className="
                        text-xs
                        font-semibold
                        text-slate-400
                      "
                    >
                      Salary After Tax
                    </p>

                    <p
                      className="
                        mt-1
                        text-lg
                        font-bold
                        text-green-600
                      "
                    >
                      Rs. {formatNumber(salaryAfterTax)}
                    </p>
                  </div>

                  <p
                    className="
                      mt-5
                      text-[11px]
                      leading-relaxed
                      text-slate-400
                    "
                  >
                    This is an estimate.
                    <br />
                    Actual may vary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxCalculator;
