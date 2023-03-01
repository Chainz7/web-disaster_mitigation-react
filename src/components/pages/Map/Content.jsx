import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import { vari, img } from '../../../constants';

defineElement(lottie.loadAnimation);
function Content() {
  const [isHoverCo, setIsHoverCo] = useState(false);
  const handleMapsContainerClickCo = () => {
    setIsHoverCo(!isHoverCo);
    setIsHoverAr(false);
  };
  const [isHoverAr, setIsHoverAr] = useState(false);
  const handleMapsContainerClickAr = () => {
    setIsHoverAr(!isHoverAr);
    setIsHoverCo(false);
  };
  const opacityIn = {
    whileInView: {
      opacity: [0, 1],
      transition: {
        duration: .7,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <>
      <Left>
        <Item>
          <TitleContainer>
            <Title variant={opacityIn} whileInView={opacityIn.whileInView}>Tulungrejo</Title>
            <View variant={opacityIn} whileInView={opacityIn.whileInView}>Lihat >> </View>
          </TitleContainer>
          <SubTitleContainer>
            <SubTitle>
              <SubTop variant={opacityIn} whileInView={opacityIn.whileInView}>KECAMATAN</SubTop>
              <SubBot variant={opacityIn} whileInView={opacityIn.whileInView}>Bumiaji</SubBot>
            </SubTitle>
            <SubTitle>
              <SubTop variant={opacityIn} whileInView={opacityIn.whileInView}>KOTA</SubTop>
              <SubBot variant={opacityIn} whileInView={opacityIn.whileInView}>Batu</SubBot>
            </SubTitle>
            <SubTitle>
              <SubTop variant={opacityIn} whileInView={opacityIn.whileInView}>PROVINSI</SubTop>
              <SubBot variant={opacityIn} whileInView={opacityIn.whileInView}>Jawa Timur</SubBot>
            </SubTitle>
          </SubTitleContainer>
          <FactsContainer>
            <FactsTop variant={opacityIn} whileInView={opacityIn.whileInView}>Fakta Singkat</FactsTop>
            <FactsBot variant={opacityIn} whileInView={opacityIn.whileInView}>Tulungrejo adalah sebuah desa di wilayah Kecamatan Bumiaji, Kota Batu, Provinsi Jawa Timur.Desa ini masuk dari salah satu desa yang akan dikembangkan sebagai desa wisata melalui program PNPM Mandiri pedesaan. Hampir semua penduduk desa ini membudidayakan tanaman bunga beraneka ragam.</FactsBot>
          </FactsContainer>
          <InfoContainer>
            <InfoTitle variant={opacityIn} whileInView={opacityIn.whileInView}>Informasi Desa</InfoTitle>
            <InfoBot>
              <InfoInside>
                <Info>
                  <InfoTop variant={opacityIn} whileInView={opacityIn.whileInView}>Dusun</InfoTop>
                  <InfoBott variant={opacityIn} whileInView={opacityIn.whileInView}>5</InfoBott>
                </Info>
                <Info>
                  <InfoTop variant={opacityIn} whileInView={opacityIn.whileInView}>Rt</InfoTop>
                  <InfoBott variant={opacityIn} whileInView={opacityIn.whileInView}>80</InfoBott>
                </Info>
              </InfoInside>
              <InfoInside>
                <Info>
                  <InfoTop variant={opacityIn} whileInView={opacityIn.whileInView}>Rw</InfoTop>
                  <InfoBott variant={opacityIn} whileInView={opacityIn.whileInView}>17</InfoBott>
                </Info>
                <Info>
                  <InfoTop variant={opacityIn} whileInView={opacityIn.whileInView}>Penduduk</InfoTop>
                  <InfoBott variant={opacityIn} whileInView={opacityIn.whileInView}>8800</InfoBott>
                </Info>
              </InfoInside>
            </InfoBot>
          </InfoContainer>
        </Item>
        <Line></Line>
        <Item>
          <TitleContainer>
            <TitleSpec variant={opacityIn} whileInView={opacityIn.whileInView}>Coban Talon</TitleSpec>
            <View variant={opacityIn} whileInView={opacityIn.whileInView}>Lihat >> </View>
          </TitleContainer>
          <FactsContainer>
            <FactsBot variant={opacityIn} whileInView={opacityIn.whileInView}>Air terjun indah yang jatuh ke kolam alami, dikelilingi pakis dan bebatuan di tengah hutan lebat.</FactsBot>
          </FactsContainer>
        </Item>
        <Item>
          <TitleContainer>
            <TitleSpec variant={opacityIn} whileInView={opacityIn.whileInView}>Gunung Arjuno</TitleSpec>
            <View variant={opacityIn} whileInView={opacityIn.whileInView}>Lihat >> </View>
          </TitleContainer>
          <FactsContainer>
            <FactsBot variant={opacityIn} whileInView={opacityIn.whileInView}>Gunung di dataran tinggi yang populer, tujuan memanjat tebing, mendaki & panorama indah</FactsBot>
          </FactsContainer>
        </Item>
        <Item>
          <TitleContainer>
            <TitleSpec variant={opacityIn} whileInView={opacityIn.whileInView}>Sungai Brantas</TitleSpec>
            <View variant={opacityIn} whileInView={opacityIn.whileInView}>Lihat >> </View>
          </TitleContainer>
          <FactsContainer>
            <FactsBot variant={opacityIn} whileInView={opacityIn.whileInView}>Sumber air Titik Nol Brantas itu berada di tengah-tengah lahan konservasi. Debit airnya kurang lebih 2,5 liter perdetik. Kelebihan air dari Sumber Brantas itu adalah kejernihannya. Air itu bisa diminum langsung dari sumbernya. </FactsBot>
          </FactsContainer>
        </Item>
      </Left>
      <Right>
        <BackgroundContainer >
          <Background src={img.map} variant={opacityIn} whileInView={opacityIn.whileInView}/>
          <MapsAbsolute>
            <MapsContainerCo onClick={handleMapsContainerClickCo} variant={opacityIn} whileInView={opacityIn.whileInView}>
              <lord-icon src="https://cdn.lordicon.com/fihkmkwt.json" trigger="loop" delay="500" colors="primary:#121331,secondary:#4bb3fd" state="hover-jump-spin" style={{width:"100%", height:"100%", objectFit:"cover"}}></lord-icon>
            </MapsContainerCo>
            <MapsContainerAr onClick={handleMapsContainerClickAr} variant={opacityIn} whileInView={opacityIn.whileInView}>
              <lord-icon src="https://cdn.lordicon.com/fihkmkwt.json" trigger="loop" delay="500" colors="primary:#121331,secondary:#4bb3fd" state="hover-jump-spin" style={{width:"100%", height:"100%", objectFit:"cover"}}></lord-icon>
            </MapsContainerAr>
          </MapsAbsolute>
          <MapsHoverAbsolute>
            <MapsHoverCo style={{ display: isHoverCo ? 'flex' : 'none' }} variant={opacityIn} whileInView={opacityIn.whileInView}>
              <HoverMapsImage variant={opacityIn} whileInView={opacityIn.whileInView}>
                <HoverImageCo src="https://kabarmalang.com/wp-content/uploads/2020/11/DSCN7077-scaled.jpg"/>
              </HoverMapsImage>
              <HoverTitle variant={opacityIn} whileInView={opacityIn.whileInView}>Coban Talun</HoverTitle>
              <Link to="https://goo.gl/maps/aEYHfoCQ1BBkuvsg9" target="_blank">
                <HoverAddress variant={opacityIn} whileInView={opacityIn.whileInView}>Lihat Di Maps</HoverAddress>
              </Link>
            </MapsHoverCo>
            <MapsHoverAr style={{ display: isHoverAr ? 'flex' : 'none' }} variant={opacityIn} whileInView={opacityIn.whileInView}>
              <HoverMapsImage variant={opacityIn} whileInView={opacityIn.whileInView}>
                <HoverImageAr src="https://getlost.id/wp-content/uploads/2021/03/arjuno-welirang_1360257812-1068x712.jpeg"/>
              </HoverMapsImage>
              <HoverTitleAr variant={opacityIn} whileInView={opacityIn.whileInView}>Gunung Arjuno</HoverTitleAr>
              <Link to="https://goo.gl/maps/ceyLKg9G4ANkbjtd7" target="_blank">
                <HoverAddress variant={opacityIn} whileInView={opacityIn.whileInView}>Lihat Di Maps</HoverAddress>
              </Link>
            </MapsHoverAr>
          </MapsHoverAbsolute>
        </BackgroundContainer>
        <Line></Line>
      </Right>    
    </>
  )
}
const Left = styled.div`
  width: 30%;
  height: 100%;
  display: grid;
  gap: 2rem;
  padding: 1rem;
`
const Item = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: start;
  align-items: start;
  gap: 1rem;
`
const TitleContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Title = styled(motion.span)`
  font-weight: 600;
  font-size: 24px;
  color: ${vari.mapsTitle};
  text-decoration: underline;
`
const View = styled(motion.span)`
  font-weight: 500;
  font-size: 14px;
  color: ${vari.quartery};
  cursor: pointer;
  &:hover {
    color: black;
    transition: all 0.3s ease-in-out;
  }
`
const TitleSpec = styled(motion.span)`
  font-weight: 600;
  font-size: 22px;
  color: ${vari.mapsTitle};
  text-decoration: underline;
`
const SubTitleContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`
const SubTitle = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  justify-items: start;
  align-items: start;
`
const SubTop = styled(motion.span)`
  font-weight: 600;
  font-size: 14px;
  color: ${vari.mapsSubTitle};
`
const SubBot = styled(motion.span)`
  font-weight: 400;
  font-size: 16px;
  color: ${vari.mapsThird};
`
const FactsContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  justify-content: start;
  align-items: center;
`
const FactsTop = styled(motion.span)`
  font-weight: 500;
  font-size: 20px;
  color: ${vari.mapsFour};
`
const FactsBot = styled(motion.span)`
  font-weight: 400;
  font-size: 14px;
  color: ${vari.mapsThird};
`
const InfoContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  justify-content: start;
  align-items: center;
`
const InfoTitle = styled(motion.span)`
  font-weight: 500;
  font-size: 20px;
  color: ${vari.mapsFour};
`
const InfoBot = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5rem;
`
const InfoInside = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  justify-content: start;
  align-items: center;
  gap: 1rem;
`
const Info = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  justify-items: start;
  align-items: start;
`
const InfoTop = styled(motion.span)`
  font-weight: 600;
  font-size: 14px;
  color: ${vari.mapsSubTitle};
`
const InfoBott = styled(motion.span)`
  font-weight: 400;
  font-size: 16px;
  color: ${vari.mapsThird};
`
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${vari.mapsSubTitle};
`
const Right = styled(motion.div)`
  width: 70%;
  height: 100%;
  display: grid;
  gap: 2.55rem;
`
const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
`
const Background = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const MapsAbsolute = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`
const MapsHoverAbsolute = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const MapsContainerCo = styled(motion.div)`
  width: 3rem;
  height: 3rem;
  position: relative;
  left: 18.25rem;
  top: 9.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const MapsContainerAr = styled(motion.div)`
  width: 3rem;
  height: 3rem;
  position: relative;
  left: 36.5rem;
  top: 2.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const MapsHoverCo = styled(motion.div)`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: .5rem;
  left: 14.75rem;
  top: 2.8rem;
  align-items: center;
  background-color: #f3f3f3;
  border: 1px solid rgba(210, 215, 211, 0.5);
  box-shadow: 0 2px 4px 0 rgba(210, 215, 211, 0.5); 
  border-radius: 5%;
`
const MapsHoverAr = styled(motion.div)`
  display: none;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 32.75rem;
  top: 5.5rem;
  align-items: center;
  background-color: #f3f3f3;
  border: 1px solid rgba(210, 215, 211, 0.5);
  box-shadow: 0 2px 4px 0 rgba(210, 215, 211, 0.5); 
  border-radius: 5%;
`
const HoverMapsImage = styled(motion.div)`
  width: 100%;
  height: 6rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  border-bottom: 1px solid rgba(210, 215, 211, 0.5);
  box-shadow: 0 2px 3px 0 rgba(210, 215, 211, 0.5); 
`
const HoverImageCo = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5% 5% 0 0;
`
const HoverImageAr = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 0 5% 5%;
`
const HoverTitle = styled(motion.span)`
  padding-left: 1rem;
  padding-right: 1rem;
  font-weight: 800;
  font-size: 20px;
  -webkit-text-stroke: 1px white;
  color: ${vari.quartery};
  cursor: default;
`
const HoverTitleAr = styled(motion.span)`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: .5rem;
  font-weight: 800;
  font-size: 20px;
  -webkit-text-stroke: 1px white;
  color: ${vari.quartery};
  cursor: default;
`
const HoverAddress = styled(motion.span)`
  font-weight: 500;
  font-size: 14px;
  color: ${vari.mapsSubTitle};
  cursor: pointer;
  &:hover {
    color: ${vari.mapsThird};
    transition: all 0.3s ease-in-out;
  }
`
export default Content