import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div className="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className="about">
        <h2>About Me</h2>
        <p>
          안녕하세요! 개발을 정말 좋아하고, 새로운 기술과 도구들을 다루는 걸 즐기는 웹 개발자입니다. 
          최신 트렌드와 프레임워크를 접하며 매일 새로운 영감을 얻고 있습니다.
        </p>
        <p>
          프론트엔드와 백엔드 모두에 도전하며 문제를 해결해 나가는 과정에서 큰 성취감을 느끼고, 
          끊임없이 배우고 성장하는 것을 목표로 삼고 있습니다. 더 나은 결과를 만들어내기 위해 항상 최선을 다하고 있어요.
        </p>
      </div>
    </motion.div>
  );
}