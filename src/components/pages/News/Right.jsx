import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari } from '../../../constants'
import { Link } from 'react-router-dom'

function Right() {
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
    <Container>
      { /* ITEM 1 */}
      <Wrapper>
        <Left>
          <ItemTextTop>
            <DateTitle variant={opacityIn} whileInView={opacityIn.whileInView}>28 Feb 2023 | Bencana</DateTitle>
            <Link className='link' to="https://jatim.antaranews.com/berita/683334/satu-orang-meninggal-akibat-longsor-di-ngantang-malang" target="_blank">
              <Title variant={opacityIn} whileInView={opacityIn.whileInView}>“Satu orang meninggal akibat longsor” <br/> di Ngantang Malang</Title>
            </Link>
          </ItemTextTop>
          <SubTitle variant={opacityIn} whileInView={opacityIn.whileInView}>Satu orang warga Kabupaten Malang,Tuminah berusia 84 tahun dilaporkan meninggal dunia akibat longsor yang menimpa rumah di wilayah Desa... </SubTitle>
        </Left>
        <ImageContainer className='link' to="https://jatim.antaranews.com/berita/683334/satu-orang-meninggal-akibat-longsor-di-ngantang-malang" target="_blank">
          <Image src="https://img.antaranews.com/cache/730x487/2023/02/28/00e133e8-3915-44a2-ad2c-a74aec5a31fc.jpg.webp" variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.05 }} transition={{ duration: .4 }}/>
        </ImageContainer>
      </Wrapper>
      { /* ITEM 1 */}
      <Wrapper>
        <Left>
          <ItemTextTop>
            <DateTitle variant={opacityIn} whileInView={opacityIn.whileInView}>12 Feb 2023 | Infrastruktur</DateTitle>
            <Link className='link' to="https://suryamalang.tribunnews.com/2023/02/20/pembangunan-jembatan-permanen-tulungrejo-kota-batu-pasca-longsor-ditanggung-pemkot" target="_blank">
              <Title variant={opacityIn} whileInView={opacityIn.whileInView}>“Pembangunan Jembatan Permanen Tulungrejo Kota Batu Pasca Longsor” Ditanggung Pemkot</Title>
            </Link>
          </ItemTextTop>
          <SubTitle variant={opacityIn} whileInView={opacityIn.whileInView}>Pemkot Batu akan membangun jembatan permanen sebagi pengganti jembatan bambu penghubung RT 1 dan RT 2 Tulungrejo Kecamatan Bumiaji Kota Batu  yang putus karena... </SubTitle>
        </Left>
        <ImageContainer className='link' to="https://suryamalang.tribunnews.com/2023/02/20/pembangunan-jembatan-permanen-tulungrejo-kota-batu-pasca-longsor-ditanggung-pemkot" target="_blank">
          <Image src="https://cdn-2.tstatic.net/suryamalang/foto/bank/images/Kondisi-jembatan-Tulungrejo-Kota-Batu.jpg" variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.05 }} transition={{ duration: .4 }}/>
        </ImageContainer>
      </Wrapper>
      { /* ITEM 1 */}
      <Wrapper>
        <Left>
          <ItemTextTop>
            <DateTitle variant={opacityIn} whileInView={opacityIn.whileInView}>7 Nov 2022 | Bencana</DateTitle>
            <Link className='link' to="https://surabaya.kompas.com/read/2022/10/08/072526578/hujan-deras-3-desa-di-kota-batu-kebanjiran-air-masuk-ke-rumah-warga?page=all" target="_blank">
              <Title variant={opacityIn} whileInView={opacityIn.whileInView}>“Hujan Deras, 3 Desa di Kota Batu Kebanjiran” Air Masuk ke Rumah Warga</Title>
            </Link>
          </ItemTextTop>
          <SubTitle variant={opacityIn} whileInView={opacityIn.whileInView}>Tiga desa di Kota Batu, Jawa Timur diterjang banjir usai hujan deras mengguyur pada Jumat (7/10/2022). Tiga desa tersebut yakni Desa Tulungrejo, Desa Bumiaji, dan... </SubTitle>
        </Left>
        <ImageContainer className='link' to="https://surabaya.kompas.com/read/2022/10/08/072526578/hujan-deras-3-desa-di-kota-batu-kebanjiran-air-masuk-ke-rumah-warga?page=all" target="_blank">
          <Image src="https://asset.kompas.com/crops/pb97Y9PfJAtM-9JTY17RJXgFJOw=/194x128:1726x1149/750x500/data/photo/2022/10/07/633f8d51b1869.jpg" variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.05 }} transition={{ duration: .4 }}/>
        </ImageContainer>
      </Wrapper>
      { /* ITEM 1 */}
      <Wrapper>
        <Left>
          <ItemTextTop>
            <DateTitle variant={opacityIn} whileInView={opacityIn.whileInView}>13 Des 2018 | Bencana</DateTitle>
            <Link className='link' to="https://www.beritasatu.com/nasional/527522/korban-ketiga-tragedi-coban-talun-ditemukan-di-dasar-sungai" target="_blank">
              <Title variant={opacityIn} whileInView={opacityIn.whileInView}>“Korban Ketiga Tragedi Coban Talun” Ditemukan di Dasar Sungai</Title>
            </Link>
          </ItemTextTop>
          <SubTitle variant={opacityIn} whileInView={opacityIn.whileInView}>Tempat Wisata Coban Talun di Desa Tulungrejo ditutup sementara selama satu-dua pekan bagi pengunjung karena sedang dilakukan olah tempat kejadian perkara... </SubTitle>
        </Left>
        <ImageContainer className='link' to="https://www.beritasatu.com/nasional/527522/korban-ketiga-tragedi-coban-talun-ditemukan-di-dasar-sungai" target="_blank">
          <Image src="https://img2.beritasatu.com/cache/beritasatu/910x580-2/631455676123.jpg.webp" variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.05 }} transition={{ duration: .4 }}/>
        </ImageContainer>
      </Wrapper>
    </Container>
  )
}
const Container = styled.div`
  width: 50%;
  display: grid;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  @media (max-width: 1080px) {
    width: 100%;
  }
  @media (max-width: 440px) {
    width: 90%;
  }
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 2rem;
  @media (max-width: 1080px) {
    padding-left: 0;
    justify-content: flex-start;
    gap: 0;
  }
`
const Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
const ItemTextTop = styled.div`
  display: grid;
  margin-bottom: .75rem;
`
const DateTitle = styled(motion.span)`
  font-weight: 500;
  font-size: 13px;
  color: ${vari.quartery};
`
const Title = styled(motion.span)`
  font-weight: 600;
  font-size: 18px;
  text-decoration: underline;
  text-decoration-color: ${vari.quartery};
  text-decoration-thickness: .1rem;
  &:hover {
    color: ${vari.quartery};
    text-decoration-color: ${vari.articleBottom};
    transition: all 0.4s ease-in-out;  
  }
  @media (max-width: 440px) {
    font-size: 14px;
  }
`
const SubTitle = styled(motion.span)`
  font-weight: 300;
  font-size: 13px;
  color: ${vari.quartery};
  @media (max-width: 440px) {
    font-size: 11px;
  }
  @media (max-width: 440px) {
    display: none;
  }
`
const ImageContainer = styled(Link)`
  width: 13rem;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  @media (max-width: 1230px) {
    width: 12rem;
  }
  @media (max-width: 1160px) {
    width: 11rem;
  }
  @media (max-width: 1080px) {
    width: 20rem;
    /* height: 6rem; */
    margin-right: 0;
  }
  @media (max-width: 902px) {
    /* height: 6.8rem; */
  }
  @media (max-width: 690px) {
    /* height: 8.8rem; */
  }
  @media (max-width: 506px) {
    /* height: 10rem; */
  }
  @media (max-width: 440px) {
    width: 12rem;
    /* height: 6rem; */
  }
`
const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  border-radius: 2%;
  object-fit: cover;
`

export default Right