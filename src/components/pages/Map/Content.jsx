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
  const [isHoverAr, setIsHoverAr] = useState(false);
  const [isCuban, setIsCuban] = useState(false);
  const [isArjuno, setIsArjuno] = useState(false);
  const [isBrantas, setIsBrantas] = useState(false);
  const [isTulungrejo, setIsTulungrejo] = useState(true);
  const handleMapsContainerClickCo = () => {
    setIsHoverCo(!isHoverCo);
    setIsHoverAr(false);
    setIsCuban(!isCuban);
    setIsArjuno(false);
    setIsBrantas(false);
    setIsTulungrejo(false);
  };
  const handleMapsContainerClickAr = () => {
    setIsHoverAr(!isHoverAr);
    setIsHoverCo(false);
    setIsCuban(false);
    setIsArjuno(!isArjuno);
    setIsBrantas(false);
    setIsTulungrejo(false);
  };
  const handleClickCuban = () => {
    setIsHoverCo(!isHoverCo);
    setIsHoverAr(false);
    setIsCuban(!isCuban);
    setIsArjuno(false);
    setIsBrantas(false);
    setIsTulungrejo(false);
  };
  const handleClickArjuno = () => {
    setIsHoverAr(!isHoverAr);
    setIsHoverCo(false);
    setIsCuban(false);
    setIsArjuno(!isArjuno);
    setIsBrantas(false);
    setIsTulungrejo(false);
  };
  const handleClickBrantas = () => {
    setIsHoverCo(false);
    setIsHoverAr(false);
    setIsCuban(false);
    setIsArjuno(false);
    setIsBrantas(!isBrantas);
    setIsTulungrejo(false);
  };
  const handleClickTulungrejo = () => {
    setIsHoverCo(false);
    setIsHoverAr(false);
    setIsCuban(false);
    setIsArjuno(false);
    setIsBrantas(false);
    setIsTulungrejo(!isTulungrejo);
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
            <View onClick={handleClickTulungrejo} variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>Lihat >> </View>
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
            <View onClick={handleClickCuban} variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>Lihat >> </View>
          </TitleContainer>
          <FactsContainer>
            <FactsBot variant={opacityIn} whileInView={opacityIn.whileInView}>Air terjun indah yang jatuh ke kolam alami, dikelilingi pakis dan bebatuan di tengah hutan lebat.</FactsBot>
          </FactsContainer>
        </Item>
        <Item>
          <TitleContainer>
            <TitleSpec variant={opacityIn} whileInView={opacityIn.whileInView}>Gunung Arjuno</TitleSpec>
            <View onClick={handleClickArjuno}  variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>Lihat >> </View>
          </TitleContainer>
          <FactsContainer>
            <FactsBot variant={opacityIn} whileInView={opacityIn.whileInView}>Gunung di dataran tinggi yang populer, tujuan memanjat tebing, mendaki & panorama indah</FactsBot>
          </FactsContainer>
        </Item>
        <Item>
          <TitleContainer>
            <TitleSpec variant={opacityIn} whileInView={opacityIn.whileInView}>Sungai Brantas</TitleSpec>
            <View onClick={handleClickBrantas} variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>Lihat >> </View>
          </TitleContainer>
          <FactsContainer>
            <FactsBot variant={opacityIn} whileInView={opacityIn.whileInView}>Sumber air Titik Nol Brantas itu berada di tengah-tengah lahan konservasi. Debit airnya kurang lebih 2,5 liter perdetik. Kelebihan air dari Sumber Brantas itu adalah kejernihannya. Air itu bisa diminum langsung dari sumbernya. </FactsBot>
          </FactsContainer>
        </Item>
      </Left>
      <Right>
        <BackgroundContainer>
          <Background src={img.map} variant={opacityIn} whileInView={opacityIn.whileInView}/>
          <MapsAbsolute>
            <MapsContainerCo onClick={handleMapsContainerClickCo} variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <lord-icon src="https://cdn.lordicon.com/fihkmkwt.json" trigger="loop" delay="500" colors="primary:#121331,secondary:#4bb3fd" state="hover-jump-spin" style={{width:"100%", height:"100%", objectFit:"cover"}}></lord-icon>
            </MapsContainerCo>
            <MapsContainerAr onClick={handleMapsContainerClickAr} variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <lord-icon src="https://cdn.lordicon.com/fihkmkwt.json" trigger="loop" delay="500" colors="primary:#121331,secondary:#4bb3fd" state="hover-jump-spin" style={{width:"100%", height:"100%", objectFit:"cover"}}></lord-icon>
            </MapsContainerAr>
          </MapsAbsolute>
          <MapsHoverAbsolute>
            <MapsHoverCo style={{ display: isHoverCo || isCuban ? 'flex' : 'none' }} variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <HoverMapsImage variant={opacityIn} whileInView={opacityIn.whileInView}>
                <HoverImageCo src="https://kabarmalang.com/wp-content/uploads/2020/11/DSCN7077-scaled.jpg"/>
              </HoverMapsImage>
              <HoverTitle variant={opacityIn} whileInView={opacityIn.whileInView}>Coban Talun</HoverTitle>
              <Link to="https://goo.gl/maps/aEYHfoCQ1BBkuvsg9" target="_blank">
                <HoverAddress variant={opacityIn} whileInView={opacityIn.whileInView}>Lihat Di Maps</HoverAddress>
              </Link>
            </MapsHoverCo>
            <MapsHoverAr style={{ display: isHoverAr || isArjuno ? 'flex' : 'none' }} variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
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
        <BottomContainer>
          <TitleColl>
            <TitleCol style={{ display: isTulungrejo ? 'flex' : 'none' }} variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>Foto Daerah Tulungrejo</TitleCol>
            <TitleCol style={{ display: isCuban || isHoverCo ? 'flex' : 'none' }} variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>Foto Daerah Coban Talon</TitleCol>
            <TitleCol style={{ display: isArjuno || isHoverAr ? 'flex' : 'none' }} variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>Foto Daerah Gunung Arjuno</TitleCol>
            <TitleCol style={{ display: isBrantas ? 'flex' : 'none' }} variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>Foto Daerah Sungai Brantas</TitleCol>
          </TitleColl>
          <ImageCol style={{ display: isTulungrejo ? 'flex' : 'none' }}>
            <ColContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ColImage src="https://sekilasmedia.com/wp-content/uploads/2020/08/IMG-20200815-WA0007.jpg"/>
            </ColContainer>
            <ColContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ColImage src="https://seru.co.id/wp-content/uploads/2022/06/Pintu-gerbang-masuk-Bon-Desa-Tulungrejo.jpg"/>
            </ColContainer>
            <ColContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ColImage src="https://radarmalang.jawapos.com/wp-content/uploads/2021/08/batu.jpg"/>
            </ColContainer>
            <ColContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ColImage src="https://cdn-2.tstatic.net/suryamalang/foto/bank/images/wali-kota-batu-dewanti-rumpoko-brokoli-di-desa-tulungrejo-kecamatan-bumiaji_20180826_172908.jpg"/>
            </ColContainer>
            <ColContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ColImage src="https://jadesta.kemenparekraf.go.id/imgpost/50524_medium.jpg"/>
            </ColContainer>
            <ColContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ColImage src="https://live.staticflickr.com/65535/50047631882_11b936c954_o.jpg"/>
            </ColContainer>
          </ImageCol>
          <ImageCol style={{ display: isCuban || isHoverCo ? 'flex' : 'none' }}>
            <ColContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ColImage src="https://www.pinhome.id/info-area/wp-content/uploads/2022/05/beritapariwisata-com-min.jpg"/>
            </ColContainer>
            <ColContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ColImage src="https://pergiyuk.com/wp-content/uploads/2020/11/Rumah-Pagupon-1024x768.jpg"/>
            </ColContainer>
            <ColContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ColImage src="https://kabarmalang.com/wp-content/uploads/2020/11/DSCN7077-scaled.jpg"/>
            </ColContainer>
            <ColContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ColImage src="https://4.bp.blogspot.com/-4jmiV67KWfE/WbniMDt45rI/AAAAAAAABt0/ak4LfK2ggO8ak_RTL8y4zAUzZt0wmJRGwCLcBGAs/s1600/wp-image-1771945278.jpg"/>
            </ColContainer>
            <ColContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ColImage src="https://3.bp.blogspot.com/-TvGoxJ2Oq1M/W57a7bAFATI/AAAAAAAACr8/4KcgI4PDKfoFgCOwkNOs2XES6Sn7M2NKwCLcBGAs/w1200-h630-p-k-no-nu/coban-talun.jpg"/>
            </ColContainer>
            <ColContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ColImage src="https://www.hargatiket.net/wp-content/uploads/2020/02/coban-talun-batu-malang.jpg"/>
            </ColContainer>
          </ImageCol>
          <ImageCol style={{ display: isArjuno || isHoverAr ? 'flex' : 'none' }}>
            <ColContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ColImage src="https://bangsaonline.com/images/uploads/berita/700/7725f540142ac19f4ed2c3d2622e75b8.jpg"/>
            </ColContainer>
            <ColContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ColImage src="https://getlost.id/wp-content/uploads/2021/03/arjuno-welirang_1360257812-1068x712.jpeg"/>
            </ColContainer>
            <ColContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ColImage src="https://mounture.com/wp-content/uploads/2021/06/img-02.png"/>
            </ColContainer>
            <ColContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ColImage src="https://cdn.idntimes.com/content-images/community/2022/05/maxresdefault-07a4f29dba4b014075e472810bb49bf0-430881afe8ca4cf39c49a7d14d739210-07a4f29dba4b014075e472810bb49bf0-aa186d4f7df7d36f47d662cbe3e808db_600x400.jpg"/>
            </ColContainer>
            <ColContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ColImage src="http://fis.um.ac.id/wp-content/uploads/2022/09/image-4.png"/>
            </ColContainer>
            <ColContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ColImage src="https://c.inilah.com/2022/07/0707_081327_1bff_inilah.com_.jpg"/>
            </ColContainer>
          </ImageCol>
          <ImageCol style={{ display: isBrantas ? 'flex' : 'none' }}>
            <ColContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ColImage src="https://www.suarasurabaya.net/wp-content/uploads/2018/03/kk201071_clip10.jpg"/>
            </ColContainer>
            <ColContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ColImage src="https://lenteratoday.com/wp-content/uploads/2019/08/Ambil-Air-Brantas-1.jpg"/>
            </ColContainer>
            <ColContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ColImage src="https://media-cdn.tripadvisor.com/media/photo-s/0d/9a/4f/bb/arboretum-brantas.jpg"/>
            </ColContainer>
            <ColContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ColImage src="https://assets.kompasiana.com/items/album/2016/01/27/20160124-160442-56a84653f19273651121c071.jpg?v=600&t=o?t=o&v=400"/>
            </ColContainer>
            <ColContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ColImage src="https://4.bp.blogspot.com/-ZlsAGCVOcQo/V-s4fQMVHZI/AAAAAAAAMyw/3i8URRFO9gk7g4CJceFYlVq8UVLF-C0VwCLcB/s1600/Arboretum%2BSumber%2BBrantas%2B%2B14%2B%252819052009%2529.jpg"/>
            </ColContainer>
            <ColContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ColImage src="https://cdn.timesmedia.co.id/images/2021/11/23/Sungai-Brantas-b.jpg"/>
            </ColContainer>
          </ImageCol>
        </BottomContainer>
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
  border-right: 1px solid ${vari.mapsBorder};
  background-image: url(${img.background});
  @media (max-width: 818px) {
    width: 100%;
    padding: 0;
    border-right: none;
    background-image: none;
  }
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
  @media (max-width: 818px) {
    display: none;
  }
`
const Right = styled(motion.div)`
  width: 70%;
  height: 100%;
  display: grid;
  gap: 1rem;
  box-shadow: -2px 0 4px 0 rgba(210, 215, 211, 0.5); 
  background-image: url(${img.background});
  @media (max-width: 818px) {
    width: 100%;
    background-image: none;
    box-shadow: none; 
  }
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
  @media (max-width: 1210px) {
    top: 9rem;
    left: 17.25rem;
  }
  @media (max-width: 1142px) {
    top: 8.25rem;
    left: 16rem;
  }
  @media (max-width: 1080px) {
    top: 7.5rem;
    left: 15rem;
  }
  @media (max-width: 1016px) {
    top: 6.75rem;
    left: 14rem;
  }
  @media (max-width: 1000px) {
    display: none;
  }
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
  @media (max-width: 1210px) {
    left: 34.5rem;
  }
  @media (max-width: 1142px) {
    top: 2.25rem;
    left: 32.25rem;
  }
  @media (max-width: 1080px) {
    top: 2rem;
    left: 30.5rem;
  }
  @media (max-width: 1016px) {
    top: 1.75rem;
    left: 28.5rem;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`
const MapsHoverCo = styled(motion.div)`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: .5rem;
  left: 14.3rem;
  top: 2.8rem;
  align-items: center;
  background-color: #f3f3f3;
  border: 1px solid rgba(210, 215, 211, 0.5);
  box-shadow: 0 2px 4px 0 rgba(210, 215, 211, 0.5); 
  border-radius: 5%;
  @media (max-width: 1000px) {
    display: none;
  }
`
const MapsHoverAr = styled(motion.div)`
  display: none;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 32.2rem;
  top: 5.5rem;
  align-items: center;
  background-color: #f3f3f3;
  border: 1px solid rgba(210, 215, 211, 0.5);
  box-shadow: 0 2px 4px 0 rgba(210, 215, 211, 0.5); 
  border-radius: 5%;
  @media (max-width: 1000px) {
    display: none;
  }
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
  @media (max-width: 818px) {
    padding-left: 0;
    padding-right: 0;
  }
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
  @media (max-width: 818px) {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
  }
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
const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  padding-left: 1rem;
  padding-bottom: 2rem;
  @media (max-width: 818px) {
    padding-left: 0;
  }
`
const TitleColl = styled(motion.div)`
  display: flex;
  gap: 35.9rem;
  cursor: default;
`
const TitleCol = styled(motion.span)`
  font-weight: 600;
  font-size: 24px;
  color: ${vari.mapsTitle};
  /* text-decoration: underline; */
`
const ImageCol = styled.div`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.45rem;
  padding-right: 2%;
  @media (max-width: 818px) {
    padding-right: 0;
  }
  @media (max-width: 496px) {
    justify-content: center;
  }
`
const ColContainer = styled(motion.div)`
  width: 12rem;
  height: 12rem;
  position: relative;
  border-radius: 5%;
  flex-basis: 30%;
  flex-shrink: 1;
  @media (max-width: 496px) {
    width: 7rem;
    height: 7rem;
  }
`
const ColImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5%;
`

export default Content