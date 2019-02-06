function chunk(arr, size) {
  var newArr = [];
  for (var i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

var data = [{
    img: "img/senate-race.png",
    title: "Forecasting the race for the Senate",
    description: "this is a description",
    link: "https://projects.fivethirtyeight.com/2018-midterm-election-forecast/senate/?ex_cid=rrpromo",
    button: "Read More",
    label: ["block"],
    type: "Bar Chart"
  },
  {
    img: "img/bubble-treemap.png",
    title: "Bubble Treemaps for Uncertainty Visualization (InfoVis Paper)",
    description: "this is a description",
    link: "https://vimeo.com/230840520",
    button: "Read More",
    label: ["block"],
    type: "Treemap"
  },
  {
    img: "img/vsup.png",
    title: "Value-Suppressing Uncertainty Palettes",
    description: "this is a description",
    link: "https://medium.com/@uwdata/value-suppressing-uncertainty-palettes-426130122ce9",
    button: "Read More",
    label: [""],
    type: "Palette"

  },
  {
    img: "img/bracket-probabilities.png",
    title: "Bracket Probabilities to Visualize Match Prediction",
    description: "this is a description",
    link: "https://twitter.com/IneffectiveMath",
    button: "Read More",
    label: ["block", "time"],
    type: ""
  },
  {
    img: "img/income-college.png",
    title: "Some Colleges Have More Students From the Top 1 Percent Than the Bottom 60. Find Yours.",
    description: "this is a description",
    link: "https://www.nytimes.com/interactive/2017/01/18/upshot/some-colleges-have-more-students-from-the-top-1-percent-than-the-bottom-60.html",
    button: "Read More",
    label: ["block"],
    type: "Treemap"
  },
  {
    img: "img/misleading-job-report.png",
    title: "How Not to Be Misled by the Jobs Report",
    description: "this is a description",
    link: "https://www.nytimes.com/2014/05/02/upshot/how-not-to-be-misled-by-the-jobs-report.html",
    button: "Read More",
    label: ["block"],
    type: "Bar Chart"
  },
  {
    img: "img/dither.png",
    title: "The dithering multivariate correlation matrix",
    description: "this is a description",
    link: "https://github.com/mjskay/uncertainty-examples/blob/master/multivariate-regression.md",
    button: "Read More",
    label: [""],
    type: ""
  },
  {
    img: "img/mammography.png",
    title: "Classic mammography problem",
    description: "this is a description",
    link: "https://hal.inria.fr/hal-00717503v2/document",
    button: "Read More",
    label: ["icon"],
    type: "Icon Array"
  },
  {
    img: "img/dotplot.png",
    title: "Quantile dotplot to visualize uncertainty of bus arrival time",
    description: "this is a description",
    link: "https://github.com/mjskay/when-ish-is-my-bus/blob/master/quantile-dotplots.md",
    button: "Read More",
    label: ["icon", "time"],
    type: "Quantile Dot Plot"
  },
  {
    img: "img/product-plot.png",
    title: "The distribution of happiness and marital status",
    description: "this is a description",
    link: "http://vita.had.co.nz/papers/prodplots.html",
    button: "Read More",
    label: ["block"],
    type: "Product Plot"
  },
  {
    img: "img/temperature-change.png",
    title: "The cities that will be drowned by global warming",
    description: "this is a description",
    link: "https://www.theguardian.com/cities/ng-interactive/2017/nov/03/three-degree-world-cities-drowned-global-warming",
    button: "Read More",
    label: ["line", "Ensemble"],
    type: "Line Ensemble"
  },
  {
    img: "img/income-mobility.png",
    title: "Income mobility Charts for Girls, Americans and other Groups",
    description: "this is a description",
    link: "https://www.nytimes.com/interactive/2018/03/27/upshot/make-your-own-mobility-animation.html",
    button: "Read More",
    label: ["icon", "Ensemble", "Flow"],
    type: "Animation"
  },
  {
    img: "img/measles.png",
    title: "Watch how the measles outbreak spreads when kids get vaccinated – and when they don't",
    description: "this is a description",
    link: "https://www.theguardian.com/society/ng-interactive/2015/feb/05/-sp-watch-how-measles-outbreak-spreads-when-kids-get-vaccinated",
    button: "Read More",
    label: ["icon", "Ensemble"],
    type: "Animation"
  },
  {
    img: "img/risk-theatre.png",
    title: "How to better communicate election forecasts",
    description: "this is a description",
    link: "https://www.washingtonpost.com/news/monkey-cage/wp/2016/11/29/how-to-better-communicate-election-forecasts-in-one-simple-chart/?noredirect=on&utm_term=.a6ef7e470ef6",
    button: "Read More",
    label: ["icon", "Ensemble"],
    type: "Risk Theater"
  },
  {
    img: "img/pictograph.png",
    title: "A study participant's increased risk of cataracts if she chose to take tamoxifen",
    description: "this is a description",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2649664/figure/F1/",
    button: "Read More",
    label: ["icon", "Ensemble"],
    type: "Icon Array"
  },
  {
    img: "img/temporal-bracket-probability.png",
    title: "How France And Croatia Made It To The World Cup Final",
    description: "this is a description",
    link: "https://fivethirtyeight.com/features/how-france-and-croatia-made-it-to-the-world-cup-final-in-one-chart/",
    button: "Read More",
    label: ["block", "time"],
    type: "Temporal Bracket Probability"
  },
  {
    img: "img/hockey.png",
    title: "NHL Regular Season Predictions",
    description: "this is a description",
    link: "http://hockeyviz.com/txt/preview1819",
    button: "Read More",
    label: ["block"],
    type: "Bar Chart"
  },
  {
    img: "img/attacking-discrimination.png",
    title: "Attacking discrimination with smarter machine learning ",
    description: "this is a description",
    link: "https://research.google.com/bigpicture/attacking-discrimination-in-ml/",
    button: "Read More",
    label: ["icon", "Ensemble"],
    type: "Dot Plot"
  },
  {
    img: "img/seats.png",
    title: "The Battle for Congress Is Close. Here’s the State of the Race.",
    description: "this is a description",
    link: "https://www.nytimes.com/interactive/2018/10/24/us/elections/2018-battle-for-congress.html",
    button: "Read More",
    label: ["icon", "Ensemble"],
    type: "Icon Array"
  },
  {
    img: "img/facet-icon-array.png",
    title: "A margin table of the data set Titanic",
    description: "this is a description",
    link: "http://www.wiwi.uni-bielefeld.de/lehrbereiche/statoekoinf/comet/wolf/pw_files/SOFTWARE/pic.plot_examples.pdf",
    button: "Read More",
    label: ["icon", "Ensemble"],
    type: "Icon Array"
  },
  {
    img: "img/reproducibility-survey.png",
    title: "TweenR package for visualizing the results of our reproducibility survey",
    description: "this is a description",
    link: "https://twitter.com/babeheim/status/1063792960377053185",
    button: "Read More",
    label: ["icon","block", "Flow"],
    type: "Animation"
  },
  {
    img: "img/tough_to_flip.png",
    title: "To Reclaim the House, Democrats Need to Flip 24 G.O.P. Seats.",
    description: "this is a description",
    link: "https://www.nytimes.com/interactive/2018/03/26/us/elections/house-races-midterms.html",
    button: "Read More",
    label: ["icon","Flow"],
    type: "Icon Array"
  },
  {
    img: "img/Italian_parliament.png",
    title: "Italy elections 2018 polls: who is running and why it matters",
    description: "this is a description",
    link: "https://ig.ft.com/italy-poll-tracker/",
    button: "Read More",
    label: ["icon"],
    type: "Icon Array"
  },
  {
    img: "img/mosaic_titanic.png",
    title: "Age and gender of Titanic survivors",
    description: "this is a description",
    link: "https://link.springer.com/book/10.1007%2F0-387-28695-0",
    button: "Read More",
    label: ["block"],
    type: "Mosiac plot"
  },
  {
    img: "img/house_result_comparison.png",
    title: "Comparison of how various outlets mapped house results",
    description: "this is a description",
    link: "https://twitter.com/niko_tinius/status/1060185135918866433?s=12",
    button: "Read More",
    label: ["block", "icon", "geo"],
    type: "Geo map"
  },
  {
    img: "img/rotated_gaussians.png",
    title: "Make rotated Gaussians, Kruschke style",
    description: "this is a description",
    link: "https://solomonkurz.netlify.com/post/make-rotated-gaussians-kruschke-style/",
    button: "Read More",
    label: ["line", "ensemble"],
    type: "Geo map"
  },
  {
    img: "img/ml_intro.png",
    title: "A visual introduction to machine learning",
    description: "this is a description",
    link: "http://www.r2d3.us/visual-intro-to-machine-learning-part-1/",
    button: "Read More",
    label: ["icon", "flow", "tree"],
    type: "Animation"
  },
  {
    img: "img/regression_tree.png",
    title: "Regression tree predicting accident rates",
    description: "this is a description",
    link: "http://link.springer.com/10.1007/0-387-28695-0",
    button: "Read More",
    label: ["icon", "tree"],
    type: "Dot plot"
  },
  {
    img: "img/playoff_chance.png",
    title: "Likelihood of making playoffs given finishing with a certain number of points",
    description: "this is a description",
    link: "https://twitter.com/IneffectiveMath/status/1068613463134650369",
    button: "Read More",
    label: [],
    type: "Gradient"
  },
  {
    img: "img/point_projection.png",
    title: "Point projections for NHL teams with gutters showing some number of standard deviations",
    description: "this is a description",
    link: "https://twitter.com/IneffectiveMath/status/1068613463134650369",
    button: "Read More",
    label: [],
    type: ""
  },
  {
    img: "img/ski_events.png",
    title: "Some ski events are easier to finish than others",
    description: "this is a description",
    link: "https://fivethirtyeight.com/features/the-45-best-and-weirdest-charts-we-made-in-2018/?ex_cid=538twitter",
    button: "Read More",
    label: ["icon"],
    type: "icon array"
  },
  {
    img: "img/wome_midterm_election.png",
    title: "Women in Congress Near Breakthrough Moment in Midterm Elections",
    description: "this is a description",
    link: "https://www.bloomberg.com/graphics/2018-midterms-women-results",
    button: "Read More",
    label: ["icon", "geo"],
    type: "icon array"
  },
  {
    img: "img/easy_to_vote.png",
    title: "How easy it is to vote in your state",
    description: "this is a description",
    link: "https://www.washingtonpost.com/graphics/2018/politics/voter-access/?utm_term=.29c3cd6e5eb7",
    button: "Read More",
    label: ["Gradient"],
    type: ""
  },
  {
    img: "img/data_right_person.png",
    title: "How do I tell if I am dating the right guy?",
    description: "this is a description",
    link: "https://public.tableau.com/en-us/s/gallery/am-i-dating-right-person",
    button: "Read More",
    label: ["icon"],
    type: "Random Icon Array"
  },
  {
    img: "img/pay_gap_ridge.png",
    title: "Women are more likely to be underpaid in certain sectors",
    description: "this is a description",
    link: "https://public.tableau.com/en-us/s/gallery/am-i-dating-right-person",
    button: "Read More",
    label: ["block"],
    type: "Density plot"
  },
  {
    img: "img/pay_gap_dot.png",
    title: "Companies have reported gender pay figures",
    description: "this is a description",
    link: "https://public.tableau.com/en-us/s/gallery/am-i-dating-right-person",
    button: "Read More",
    label: ["icon"],
    type: "Dot plot"
  },
  {
    img: "img/race_bar.png",
    title: "Post-Millennials – today’s 6- to 21-year-olds, also known as Generation Z ",
    description: "this is a description",
    link: "http://www.pewsocialtrends.org/2018/11/15/early-benchmarks-show-post-millennials-on-track-to-be-most-diverse-best-educated-generation-yet/",
    button: "Read More",
    label: ["block"],
    type: "Bar chart"
  },
  {
    img: "img/believe_in_god.png",
    title: "Nine-in-ten Americans believe in a higher power, but just a slim majority (56%) believes in God as described in the Bible",
    description: "this is a description",
    link: "http://www.pewforum.org/2018/04/25/when-americans-say-they-believe-in-god-what-do-they-mean/",
    button: "Read More",
    label: ["tree"],
    type: ""
  },
  {
    img: "img/generation_shift.png",
    title: "A generational shift in religious identity",
    description: "this is a description",
    link: "https://fivethirtyeight.com/features/are-white-evangelicals-sacrificing-the-future-in-search-of-the-past/",
    button: "Read More",
    label: ["block"],
    type: "Stack Bar Chart"
  },
  {
    img: "img/justice_survival.png",
    title: "How long will the court's liberal wing last?",
    description: "this is a description",
    link: "https://fivethirtyeight.com/features/the-45-best-and-weirdest-charts-we-made-in-2018/?ex_cid=538twitter",
    button: "Read More",
    label: ["block"],
    type: "Density plot"
  },
  {
    img: "img/Hurricane.png",
    title: "Hurricane Florence: Keep tabs on shifting storm track",
    description: "this is a description",
    link: "https://www.axios.com/hurricane-florence-storm-track-changes-map-e8f3f5d4-7594-4b1c-b5cd-0064d0b75461.html",
    button: "Read More",
    label: ["animation", "geo"],
    type: "Map"
  },
  {
    img: "img/3d_icon_array.png",
    title: "Mass exodus: The scale of the Rohingya crisis",
    description: "this is a description",
    link: "http://fingfx.thomsonreuters.com/gfx/rngs/MYANMAR-ROHINGYA/010050XD232/index.html",
    button: "Read More",
    label: ["icon", "3D"],
    type: "Icon array"
  },
  {
    img: "img/safe_ski.png",
    title: "The safest skies record",
    description: "this is a description",
    link: "https://multimedia.scmp.com/news/world/article/safety-aviation-2017/index.html",
    button: "Read More",
    label: ["icon"],
    type: "Icon array"
  },
  {
    img: "img/bexit_vote.png",
    title: "Portrait of Brexit Britain: A Divided Nation Makes a Journey Into the Unknown",
    description: "this is a description",
    link: "https://www.bloomberg.com/graphics/2018-brexit-portraits/",
    button: "Read More",
    label: ["icon"],
    type: "Icon array"
  },
  {
    img: "img/presidential_approval.png",
    title: "Presidential approval frequency",
    description: "this is a description",
    link: "https://www.safaribooksonline.com/library/view/the-truthful-art/9780133440492/ch07.html#ch07",
    button: "Read More",
    label: ["block", "ensemble"],
    type: ""
  },
  {
    img: "img/soccer_prediction.png",
    title: "From projected goals to a match forecast",
    description: "this is a description",
    link: "https://fivethirtyeight.com/methodology/how-our-club-soccer-predictions-work/",
    button: "Read More",
    label: ["block"],
    type: ""
  }
];
var cards_in_a_row = 3;
var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.chunkedData = chunk(data, cards_in_a_row);

    $scope.tag_color = {
      icon: "badge-default",
      block: "badge-primary",
      line: "badge-secondary"
    };
});
