import React from 'react';
import { StyledBoxLectureAnalysis } from '../styledComponents/index';

export const LectureAnalysis = () => {
  return (
		<>
			<div className='lectureAnalysisWrapper d-flex align-items-center justify-content-center'>
				<div className='lectureAnalysisInnerWrapper'>
					<div className='row'>
						<div className='lectureAnalysisTitle text-center col-12'>
							<h1>Analiza - zajęcia</h1>
						</div>
					</div>
					<div className='row mt-md-5 mx-2'>
						<div className='col-lg-3 col-6 p-0'>
							<StyledBoxLectureAnalysis>Wrzesień</StyledBoxLectureAnalysis>
						</div>
						<div className='col-lg-3 col-6 p-0'>
							<StyledBoxLectureAnalysis>Październik</StyledBoxLectureAnalysis>
						</div>
						<div className='col-lg-3 col-6 p-0'>
							<StyledBoxLectureAnalysis>Listopad</StyledBoxLectureAnalysis>
						</div>
						<div className='col-lg-3 col-6 p-0'>
							<StyledBoxLectureAnalysis>Grudzień</StyledBoxLectureAnalysis>
						</div>
					</div>
					<div className='row mx-2'>
						<div className='col-lg-3 col-6 p-0'>
							<StyledBoxLectureAnalysis>Styczeń</StyledBoxLectureAnalysis>
						</div>
						<div className='col-lg-3 col-6 p-0'>
							<StyledBoxLectureAnalysis>Luty</StyledBoxLectureAnalysis>
						</div>
						<div className='col-lg-3 col-6 p-0'>
							<StyledBoxLectureAnalysis>Marzec</StyledBoxLectureAnalysis>
						</div>
						<div className='col-lg-3 col-6 p-0'>
							<StyledBoxLectureAnalysis>Kwiecień</StyledBoxLectureAnalysis>
						</div>
					</div>
					<div className='row mx-2'>
						<div className='col-lg-3 col-0 p-0'></div>
						<div className='col-lg-3 col-6 p-0'>
							<StyledBoxLectureAnalysis>Maj</StyledBoxLectureAnalysis>
						</div>
						<div className='col-lg-3 col-6 p-0'>
							<StyledBoxLectureAnalysis>Czerwiec</StyledBoxLectureAnalysis>
						</div>
						<div className='col-lg-3 col-0 p-0'></div>
					</div>
				</div>
			</div>
		</>
	);
};
