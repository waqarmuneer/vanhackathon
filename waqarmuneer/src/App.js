import React, { Component } from 'react';
import { connect } from 'react-redux';
import PdfContainer from './PdfContainer';
import {Grid , Row , Col , Panel , Well} from 'react-bootstrap';
import Annotation from './Annotation/Annotation';

import * as actionTypes from './store/actions';

import './App.css';

let jQuery = require('jquery');
let annotator = require('annotator');


class App extends Component {

  state = {
      nav: true,      
  }

  componentDidMount() {
    this.jQuery = jQuery;
    let app = new annotator.App();    
    let onAddedAnnotationRef = this.props.onAddedAnnotation;  
    app.include( annotator.ui.main , {element : this.annotationContainer} );
    app.include((options) => {
      return {
          annotationCreated: function (annotation) {    
            onAddedAnnotationRef(annotation.quote,annotation.text);                                    
          }
      };
    });
    /*
    **** Here we can do server-side stuff *****
    app.include(annotator.storage.http, {
        prefix: 'http://localhost:3001/api'
    });*/
    app.start();    
  }

  setNav = (e) => {
    this.setState({ nav: e },() => {
      console.log("nav" , this.state.nav)
    });
  }

  render() {
    let pdfUrl= 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf';
    let htmlContent= "<figcaption class=\"fulltext\">“The total dollars being raised in America has been growing, but it’s not a good sign for nonprofits when you’re losing big chunks of the middle class.” [Source Image: M-image/iStock]</figcaption><p class=\"fulltext\"><a href=\"https://www.fastcompany.com/user/ben-paynter\" data-href=\"https://www.fastcompany.com/user/ben-paynter\" class=\"fulltext\" rel=\"nofollow noopener\" target=\"_blank\"><em class=\"markup--em markup--p-em\">BY BEN PAYNTER</em></a></p>\n<p class=\"fulltext\"><span class=\"fulltext\">O</span>ver the last decade, two seemingly counterintuitive trends have developed within the philanthropy world, according to <a href=\"https://www.philanthropy.com/specialreport/special-report-how-america-gi/154?cid=FEATUREDNAV\" data-href=\"https://www.philanthropy.com/specialreport/special-report-how-america-gi/154?cid=FEATUREDNAV\" class=\"fulltext\" rel=\"nofollow noopener\" target=\"_blank\">How America Gives</a>, a series of investigative reports from the <a href=\"https://www.philanthropy.com/\" data-href=\"https://www.philanthropy.com/\" class=\"fulltext\" rel=\"nofollow noopener\" target=\"_blank\"><em class=\"markup--em markup--p-em\">Chronicle of Philanthropy</em></a>. First, the amount of money that’s being donated to charity each year has steadily risen, even breaking records: In 2016, it ticked up another 1.4%, to top $390 billion. Yet the total number of Americans contributing to that sum has substantially dropped from 31% to 24% during that same time period.</p>\n<p class=\"fulltext\">The funding available to nonprofits is now increasingly controlled by a small group of wealthy donors. To show that, the <em class=\"fulltext\">Chronicle of Philanthropy</em> did a deep analysis of charitable deductions itemized on tax filings. From 2000 to 2015, the proportion of those Americans itemizing when making $100,00 or more rose from 57% to 75% of the entire donor pool. If fact, earners who make $200,000 or more account for more than half of that pool, one report notes.</p>\n<img class=\"fulltext\" src=\"https://cdn-images-1.medium.com/max/1600/0*m0JEpZX0_o0Pl7lJ.jpg\"><p class=\"fulltext\">All of which sets up a dangerous trend for small and midsize nonprofits that may rely on lots of average people giving in smaller increments to make up their funding. “The really important finding is the fact that the middle income donors seem to be giving less and less,” says Stacey Palmer, the editor of the <em class=\"fulltext\">Chronicle of Philanthropy</em>. “Clearly, the total dollars being raised in America has been growing, but it’s not a good sign for nonprofits when you’re losing big chunks of the middle class.”</p>\n<p class=\"fulltext\">One big reason is that people making different salaries probably think differently about what societal problems need attention. Often, middle class donors think on a local community-improving level, while truly affluent donors may have been blinded to exactly where their money might make the most impact. “I think one of the things that people are worried about is that it’s easy for a national group with a brand name to attract donations,” adds Palmer. “It’s not so easy for groups that may be doing tremendous and important work in communities to get the resources they need.”</p>\n<p class=\"fulltext\">That problem might be compounded shortly because many nonprofits could be affected by the Trump administration’s proposed cuts to <a href=\"https://www.cbsnews.com/news/trump-budget-cuts-social-safety-net-programs-medicaid-overhauls-tax-code/\" data-href=\"https://www.cbsnews.com/news/trump-budget-cuts-social-safety-net-programs-medicaid-overhauls-tax-code/\" class=\"fulltext\" rel=\"nofollow noopener\" target=\"_blank\">social programs</a> and a <a href=\"https://www.fastcompany.com/40441441/the-philanthropy-world-is-frightened-that-trumps-tax-plan-is-going-to-slow-donations\" data-href=\"https://www.fastcompany.com/40441441/the-philanthropy-world-is-frightened-that-trumps-tax-plan-is-going-to-slow-donations\" class=\"fulltext\" rel=\"nofollow noopener\" target=\"_blank\">tax reform plan</a> that lowers the incentives for many donors to give at all, because they won’t be able to claim the same tax break. “These trends that we’re seeing could become more worrisome and more important to nonprofits and there may be more of a divide between the haves and the have nots,” adds Palmer.</p>\n<p class=\"fulltext\">To figure out which cities in particular may be ending up the most shortchanged over time, the <em class=\"fulltext\">Chronicle</em> separated each place’s donors into four income brackets and created and additional metric called “<a href=\"https://www.philanthropy.com/article/A-Look-at-Whether-Your-Area/241350\" data-href=\"https://www.philanthropy.com/article/A-Look-at-Whether-Your-Area/241350\" class=\"fulltext\" rel=\"nofollow noopener\" target=\"_blank\">giving opportunity</a>,” which it defines as “the dollars that would have been raised if giving rates in each of four income groups had matched national averages.” (Those averages range by income bracket and city size, of course, but for people in large metros making over $200,000, it’d be 3.3%, for instance.)</p>\n<img class=\"fulltext\" src=\"https://cdn-images-1.medium.com/max/1600/0*QzeqPy57D3O0iVw9.jpg\"><p class=\"fulltext\">Only 36 of the country’s 100 biggest cities look <a href=\"https://www.philanthropy.com/article/How-America-Gives-Special/241344\" data-href=\"https://www.philanthropy.com/article/How-America-Gives-Special/241344\" class=\"fulltext\" rel=\"nofollow noopener\" target=\"_blank\">philanthropically stable–</a>meaning that they’re places where everyone who is still giving is doing so at the national rate across various income levels. That list includes Atlanta, Colorado Springs, and Wichita, Kansas. Among the other two-thirds, that lack of participation is costing the community big. In Manchester, New Hampshire, for instance, itemized givers have donated $150 million overall, but that’s 97% below same-size cities. If more donors gained enthusiasm, the sum would be $296 million. Janesville, Wisconsinites gave $47 million, but their base could reasonably be expected to grow another 77%. The people of Atlantic City, New Jersey, gifted $88 million, are underperforming by 61%. Basically, as donor enthusiasm wanes, many places are missing out on tens of millions for their communities.</p>\n<p class=\"fulltext\">For nonprofit groups, the <em class=\"fulltext\">Chronicle</em> has created an <a href=\"https://www.philanthropy.com/interactives/how-america-gives\" data-href=\"https://www.philanthropy.com/interactives/how-america-gives\" class=\"fulltext\" rel=\"nofollow noopener\" target=\"_blank\">interactive map</a> of America’s metros that shows which are falling short and with what income group–it could be used as a roadmap for where to concentrate additional fundraising efforts. In Detroit, where higher-income givers are actually slightly underperforming, bringing up their portion just a little would have an outsize impact, notes Drew Lindsay, one of the <em class=\"fulltext\">Chronicle’s</em> investigative reporters. In Worcester, Massachusetts, where people of all income brackets just aren’t giving enough across the board, re-normalizing that behavior could raise funds for social good groups tremendously. “Interestingly, if you could get all those groups up to average, the dollars going to charity in the city would double,” Lindsay says.</p>\n<p class=\"fulltext\">“Some of this is about the decisions people make especially after the recession,” Palmer says. “They’re worried about their jobs, their housing, all of those kinds of things that we know people are worried about. But in some ways are the nonprofits themselves in their solicitation techniques going after the more affluent donors? And is that part of why people feel that a small gift is being devalued to a certain point?”</p>\n<p class=\"fulltext\">Toss in consistent polling that shows nonprofits have a <a href=\"https://www.fastcompany.com/40469133/what-do-people-want-when-they-give-to-nonprofits\" data-href=\"https://www.fastcompany.com/40469133/what-do-people-want-when-they-give-to-nonprofits\" class=\"fulltext\" rel=\"nofollow noopener\" target=\"_blank\">trust problem</a>, she says, and it may be time for groups to fundamentally rethink how they can rebuild their base. (For organizations seeking a case study, <a href=\"https://www.philanthropy.com/article/The-Secret-Sauce-That-Spiced/241351\" data-href=\"https://www.philanthropy.com/article/The-Secret-Sauce-That-Spiced/241351\" class=\"fulltext\" rel=\"nofollow noopener\" target=\"_blank\">the <em class=\"markup--em markup--p-em\">Chronicle</em> </a>has charted a charitable renaissance in New Orleans.)</p>\n<p class=\"fulltext\">Meanwhile, the report raises a bigger question for the sector to ponder. “Where is the support for all of America’s nonprofits going to come from?” Palmer asks. “Nonprofits need to think about this because they may be part of the problem.”</p>\n<img class=\"fulltext\" src=\"https://cdn-images-1.medium.com/max/1600/1*273vBcPfaCbHigyCVhs3yg.png\"><p class=\"fulltext\"><em class=\"fulltext\">Originally published at </em><a href=\"https://www.fastcompany.com/40481380/average-americans-are-giving-away-less-money-and-its-a-big-problem\" data-href=\"https://www.fastcompany.com/40481380/average-americans-are-giving-away-less-money-and-its-a-big-problem\" class=\"fulltext\" rel=\"nofollow noopener\" target=\"_blank\"><em class=\"markup--em markup--p-em\">www.fastcompany.com</em></a><em class=\"fulltext\"> on October 24, 2017.</em></p>";
    let navVal = this.state.nav;
    return (
      <div className="App">
        
        <div id="annotationContainer" ref={annotationContainer => this.annotationContainer = annotationContainer}>
        <center><h1>Pintellect App - VanHacathon</h1></center>
        
        <Grid>
          <Row>    
            <Col xs={12} md={9}>
              <button onClick={() => this.setNav(true)}>Load HTML {navVal}</button>
              <button onClick={() => this.setNav(false)}>Load PDF</button>             
            </Col>
          </Row>

          <Row>
            
            <Col xs={12} md={9}>
              <Panel>
                
                {this.state.nav ? (
                  <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                ) : (
                  <PdfContainer pdfUrl={pdfUrl} />
                )}
              </Panel>              
            </Col>

            <Col xs={6} md={3}>                             
              <div className="Annotations">                
                  <Panel header="Annotations" bsStyle="primary">              
                    {this.props.prs.map(annotation => (
                        <Well key={annotation.id}>                       
                            <Annotation key={annotation.id} quote={annotation.quote} text={annotation.text}/>  
                        </Well>                  
                    ))}              
                  </Panel> 
              </div>                                            
            </Col>
          </Row>
        </Grid>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      prs: state.annotations
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onAddedAnnotation: (quote, text) => dispatch({type: actionTypes.ADD_ANNOTATION, annotationData: {quote: quote, text: text}}),      
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
